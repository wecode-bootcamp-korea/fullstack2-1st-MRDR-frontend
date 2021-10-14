import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SelectedItemList from './SelectedItemList/SelectedItemList';
import CartSuccessModal from './CartSuccessModal/CartSuccessModal';
import './SelectionsContainer.scss';

class SelectionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cartSuccessVisible: false,
    };
  }

  calculateTotalPrice = () => {
    const { price, selectedList } = this.props;
    let total = 0;
    selectedList.forEach(item => (total += price * item.amount));
    return total.toLocaleString() + '원';
  };

  alertIncompleteSelection = () => {
    const { selectedList } = this.props;
    if (!selectedList.length) return alert('필수 옵션을 선택해주세요.');
  };

  toggleCartSuccessVisibility = () => {
    this.setState({ cartSuccessVisible: !this.state.cartSuccessVisible });
  };

  addToCart = () => {
    const { selectedList } = this.props;
    const token = localStorage.getItem('token');
    // this.toggleCartSuccessVisibility(); // comment out or delete later
    if (!token) {
      alert('로그인 먼저 해주세요');
      return this.props.history.push('/login');
    }

    fetch('/cart', {
      method: 'POST',
      headers: {
        authorization: `${token}`, // 나중에 'bearer'도 넣는게 좋을 것 같습니다.
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: selectedList.map(item => {
          const { id, amount } = item;
          return { product_option_id: id, count: amount };
        }),
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('res.message:', res.message);
        if (res.message === 'SUCCESS') {
          console.log('SUCCESSFULLY ADDED ITEMS TO CART');
          this.toggleCartSuccessVisibility();
        } else {
          console.log('FAILED TO ADD ITEMS TO CART');
        }
      })
      .catch(error => {
        console.log('Cart error', error);
      });
  };

  render() {
    const { cartSuccessVisible } = this.state;
    const { name, price, selectedList, deleteSelectedItem, handleAmount } =
      this.props;

    return (
      <div className="SelectionsContainer">
        <SelectedItemList
          name={name}
          price={price}
          selectedList={selectedList}
          deleteSelectedItem={deleteSelectedItem}
          handleAmount={handleAmount}
        />

        <div className="totalPriceWrapper">
          <span className="totalPriceText">총 상품 금액</span>
          <span className="totalPrice">{this.calculateTotalPrice()}</span>
        </div>

        <div className="buttonsWrapper">
          <button
            className="cartButton"
            onClick={
              selectedList.length
                ? this.addToCart
                : this.alertIncompleteSelection
            }
          >
            장바구니
          </button>
          <button
            className="purchaseButton"
            onClick={
              selectedList.length
                ? () => alert('구매 기능 x')
                : this.alertIncompleteSelection
            }
          >
            구매하기
          </button>
        </div>

        {cartSuccessVisible && (
          <CartSuccessModal
            toggleCartSuccessVisibility={this.toggleCartSuccessVisibility}
          />
        )}
      </div>
    );
  }
}

export default withRouter(SelectionsContainer);
