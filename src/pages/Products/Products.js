import React from 'react';
import ImagesContainer from './ImagesContainer/ImagesContainer';
import BasicInfoAndOptionsContainer from './BasicInfoAndOptionsContainer/BasicInfoAndOptionsContainer';
import AdditionalInfoContainer from './AdditionalInfoContainer/AdditionalInfoContainer';
import './Products.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      productImageSlides: [],
      productColorList: [],
      infoTapOnScroll: false,
    };
    this.infoTapRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    fetch(`http://localhost:8000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ productInfo: data });
      })
      .catch(err => console.log(err));

    fetch(`http://localhost:8000/products/${id}/images`)
      .then(res => res.json())
      .then(data => {
        const imageList = [];
        for (let i = 0; i < data.length; i++) {
          if (i % 5 === 0) {
            imageList.push([]);
          }
          imageList[parseInt(i / 5)].push(data[i]);
        }
        this.setState({ productImageSlides: imageList });
      })
      .catch(err => console.error(err));

    fetch(`http://localhost:8000/products/${id}/colors`)
      .then(res => res.json())
      .then(data => {
        const colorList = [];
        for (let i = 0; i < data.length; i++) {
          if (i % 8 === 0) {
            colorList.push([]);
          }
          colorList[parseInt(i / 8)].push(data[i]);
        }
        let colorCount = 0;
        for (let arr of colorList) {
          colorCount += arr.length;
        }
        this.setState({ productColorList: colorList });
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const { infoTapRef } = this;
    const { infoTapOnScroll } = this.state;
    let windowScrollTop = e.srcElement.scrollingElement.scrollTop;
    let eventRange = infoTapRef.current.offsetTop - 115 - windowScrollTop;
    if (eventRange <= 0) {
      if (!infoTapOnScroll) {
        this.setState({ infoTapOnScroll: !infoTapOnScroll });
      }
    } else {
      if (infoTapOnScroll) {
        this.setState({ infoTapOnScroll: !infoTapOnScroll });
      }
    }
  };

  render() {
    const { infoTapRef } = this;
    const {
      productInfo,
      productImageSlides,
      productColorList,
      infoTapOnScroll,
    } = this.state;
    return (
      <div className="Products">
        <div className="mainInfoWrapper">
          <ImagesContainer
            productImageSlides={productImageSlides}
            detailImageUrl={productInfo.detailImageUrl}
          />
          {Object.keys(productInfo).length && (
            <BasicInfoAndOptionsContainer productInfo={productInfo} />
          )}
        </div>
        <AdditionalInfoContainer
          productColorList={productColorList}
          detailImageUrl={productInfo.detailImageUrl}
          infoTapRef={infoTapRef}
          infoTapOnScroll={infoTapOnScroll}
        />
      </div>
    );
  }
}

export default Products;
