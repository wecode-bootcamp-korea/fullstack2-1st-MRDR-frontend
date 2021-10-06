import React, { Component } from 'react';
import SelectedOptionList from './SelectedOptionList/SelectedOptionList';
import './SelectionsContainer.scss';

class SelectionsContainer extends Component {
  render() {
    const {
      price,
      selectedColor,
      selectedAmount,
      selectedList,
      handleSelectedList,
    } = this.props;

    return (
      <div className="SelectionsContainer">
        <SelectedOptionList
          selectedList={selectedList}
          handleSelectedList={handleSelectedList}
        />
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
