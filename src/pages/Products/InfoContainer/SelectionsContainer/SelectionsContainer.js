import React, { Component } from 'react';
import './SelectionsContainer.scss';

class SelectionsContainer extends Component {
  render() {
    const { price, selectedColor, selectedAmount } = this.props;

    return (
      <div className="SelectionsContainer">
        <div className="totalPriceWrapper">
          <span className="totalPriceText">총 상품 금액</span>
          <span className="totalPrice">
            {selectedColor && selectedAmount
              ? (price * selectedAmount).toLocaleString()
              : 0}
            원
          </span>
        </div>
      </div>
    );
  }
}

export default SelectionsContainer;
