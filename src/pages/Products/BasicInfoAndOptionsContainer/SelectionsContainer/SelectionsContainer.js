import React, { Component } from 'react';
import SelectedItemList from './SelectedItemList/SelectedItemList';
import './SelectionsContainer.scss';

class SelectionsContainer extends Component {
  calculateTotalPrice = () => {
    const { price, selectedList } = this.props;
    let total = 0;
    selectedList.forEach(
      selectedItem => (total += price * selectedItem.amount)
    );
    return total.toLocaleString() + '원';
  };

  render() {
    const { name, price, selectedList, deleteSelectedItem } = this.props;

    return (
      <div className="SelectionsContainer">
        <SelectedItemList
          name={name}
          price={price}
          selectedList={selectedList}
          deleteSelectedItem={deleteSelectedItem}
        />

        <div className="totalPriceWrapper">
          <span className="totalPriceText">총 상품 금액</span>
          <span className="totalPrice">{this.calculateTotalPrice()}</span>
        </div>

        <div className="buttonsWrapper">
          <button className="cartButton">장바구니</button>
          <button className="purchaseButton">구매하기</button>
        </div>
      </div>
    );
  }
}

export default SelectionsContainer;
