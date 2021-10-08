import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorImageCarousel from './ColorImageCarousel/ColorImageCarousel';
import './DetailInfoContainer.scss';

class DetailInfoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      productColorList: [],
      clickedColor: {
        id: 0,
        colorName: '',
        colorHexCode: '',
        imageUrlList: [],
      },
      currentSlideIndex: 0,
      colorCount: 0,
    };
  }

  componentDidMount() {
    fetch('/data/productColorsData.json')
      .then(res => res.json())
      .then(data => {
        let colorCount = 0;
        for (let arr of data) {
          colorCount += arr.length;
        }
        this.setState({
          productColorList: data,
          clickedColor: data[0][0],
          colorCount,
        });
      });
  }

  handleColorBtnClick = colorObj => {
    this.setState({ clickedColor: colorObj, currentSlideIndex: 0 });
  };

  handleSlidePrevBtn = () => {
    const { currentSlideIndex } = this.state;
    let prevIndex = currentSlideIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 0;
    }
    this.setState({ currentSlideIndex: prevIndex });
  };

  handleSlideNextBtn = () => {
    const { clickedColor, currentSlideIndex } = this.state;
    const lastIndex = parseInt((clickedColor.imageUrlList.length - 1) / 2);
    let nextIndex = currentSlideIndex + 1;
    if (nextIndex > lastIndex) {
      nextIndex = lastIndex;
    }
    this.setState({ currentSlideIndex: nextIndex });
  };

  render() {
    const { handleColorBtnClick, handleSlidePrevBtn, handleSlideNextBtn } =
      this;
    const { productColorList, clickedColor, currentSlideIndex, colorCount } =
      this.state;
    const { detailRef } = this.props;
    return (
      <div className="DetailInfoContainer" ref={detailRef}>
        <div className="infoImageWrapper">
          <img className="infoImage" src="" alt="상품 상세 정보 이미지" />
        </div>
        <div className="colorInfoWrapper">
          <p className="colorInfoTextLarge">다채로운 컬러를 담아보세요!</p>
          <div className="colorInfo">
            <div className="checkImage">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <p className="colorInfoTextLarge">{colorCount} COLORS</p>
            <p className="colorInfoTextSmall">
              색상 버튼을 클릭하면 자세한 컬러 이미지를 볼 수 있습니다.
            </p>
          </div>
          <ColorPicker
            productColorList={productColorList}
            clickedColor={clickedColor}
            handleColorBtnClick={handleColorBtnClick}
          />
          <ColorImageCarousel
            clickedColor={clickedColor}
            currentSlideIndex={currentSlideIndex}
            handleSlidePrevBtn={handleSlidePrevBtn}
            handleSlideNextBtn={handleSlideNextBtn}
          />
        </div>
      </div>
    );
  }
}

export default DetailInfoContainer;
