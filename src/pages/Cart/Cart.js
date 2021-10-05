import React from 'react';
import BasicCheckBox from './components/BasicCheckBox/BasicCheckBox';
import PricesBox from './components/PricesBox/PricesBox';
import ProductItem from './components/ProductItem/ProductItem';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartWrapper">
          <header>
            <h1>장바구니</h1>{' '}
            <ul className="menuCate">
              <li>장바구니</li>
              <li>주문 / 결제</li>
              <li>주문완료</li>
            </ul>
          </header>
          <BasicCheckBox
            type="checkBox"
            className="CheckBox"
            id="checkAllItem"
            label="전체선택(0/2)"
          />
          <main>
            <ul className="cartItems">
              <ProductItem />
            </ul>
            <div className="sideMenus">
              <PricesBox />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
