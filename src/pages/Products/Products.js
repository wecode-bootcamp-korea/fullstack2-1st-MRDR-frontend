import React from 'react';
import ImagesContainer from './ImagesContainer/ImagesContainer';
import BasicInfoAndOptionsContainer from './BasicInfoAndOptionsContainer/BasicInfoAndOptionsContainer';
import AdditionalInfoContainer from './AdditionalInfoContainer/AdditionalInfoContainer';
import {
  apiAddress,
  fetchData,
  getDividedArrByCount,
} from '../../api/productsApi';
import './Products.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      productImageSlides: [],
      productColorList: [],
      infoTapOnScroll: false,
      colorCount: 0,
    };
    this.infoTapRef = React.createRef();
  }

  async componentDidMount() {
    try {
      window.scrollTo(0, 0);
      const { id } = this.props.match.params;
      const jsonData = await Promise.all([
        fetchData(id, apiAddress.productInfo),
        fetchData(id, apiAddress.productImages),
        fetchData(id, apiAddress.productColors),
      ]);
      this.setState({ productInfo: jsonData[0] });
      this.setState({
        productImageSlides: getDividedArrByCount(jsonData[1], 5),
      });

      const productColorList = getDividedArrByCount(jsonData[2], 8);
      let colorCount = 0;
      for (let arr of productColorList) {
        colorCount += arr.length;
      }
      this.setState({ productColorList, colorCount });
      window.addEventListener('scroll', this.handleScroll);
    } catch (err) {
      console.error(err);
    }
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
      colorCount,
    } = this.state;
    const { detailImageUrl } = productInfo;
    return (
      <div className="Products">
        <div className="mainInfoWrapper">
          <ImagesContainer productImageSlides={productImageSlides} />
          {Object.keys(productInfo).length && (
            <BasicInfoAndOptionsContainer productInfo={productInfo} />
          )}
        </div>
        <AdditionalInfoContainer
          productColorList={productColorList}
          detailImageUrl={detailImageUrl}
          infoTapRef={infoTapRef}
          infoTapOnScroll={infoTapOnScroll}
          colorCount={colorCount}
        />
      </div>
    );
  }
}

export default Products;
