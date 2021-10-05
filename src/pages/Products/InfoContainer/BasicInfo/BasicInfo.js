import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
  render() {
    const { product } = this.props;
    const { name, salePrice, price } = product;

    console.log('product', product);

    return (
      <div className="BasicInfo">
        <h1 className="productName">{name}</h1>
        <div className="priceWrapper">
          <p className="currentPrice">
            {salePrice ? salePrice.toLocaleString() : price.toLocaleString()}원
          </p>
          {salePrice && (
            <>
              <p className="originalPrice">{`${price.toLocaleString()}원`}</p>
              <p className="discountRate">
                {Math.round(((price - salePrice) / price) * 100)}%
              </p>
            </>
          )}
        </div>
        <div className="shipMileageWrapper">
          <div className="lineWrapper">
            <span className="lineTitle">배송정보</span>
            <span>2500원 CJ대한통운 5만원 이상 구매시 무료배송</span>
          </div>
          <div className="lineWrapper">
            <span className="lineTitle">카드혜택</span>
            <span>5만원 이상 결제시 무이자 할부</span>
            <button>카드보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
