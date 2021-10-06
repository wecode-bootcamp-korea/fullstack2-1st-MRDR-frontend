import React, { Component } from 'react';
import Line from '../Line';
import './BasicInfoContainer.scss';

class BasicInfoContainer extends Component {
  render() {
    const { productName, price, salePrice } = this.props;

    return (
      <div className="BasicInfoContainer">
        <h1 className="productName">{productName}</h1>
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
          <Line
            title="배송정보"
            //  margin="marginBottom18"
          >
            <span>2500원 CJ대한통운 5만원 이상 구매시 무료배송</span>
          </Line>
          <Line title="카드혜택">
            <span>5만원 이상 결제시 무이자 할부</span>
            <div className="cardInfoButton">
              <button>카드보기</button>˅
            </div>
          </Line>
        </div>
      </div>
    );
  }
}

export default BasicInfoContainer;
