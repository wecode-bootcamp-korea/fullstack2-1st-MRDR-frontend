import React from 'react';
import Title from '../../../components/Title/Title';
import './CartHeader.scss';

class CartHeader extends React.Component {
  render() {
    return (
      <header className="CartHeader">
        <Title title="장바구니" />
        <ul className="menuCate">
          <li>장바구니</li>
          <li>주문 / 결제</li>
          <li>주문완료</li>
        </ul>
      </header>
    );
  }
}

export default React.memo(CartHeader);
