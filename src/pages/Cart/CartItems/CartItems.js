import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import './CartItems.scss';

class CartItems extends React.Component {
  render() {
    const { onClick, items } = this.props;
    return (
      <ul className="CartItems">
        {items.map(item => (
          <CartItem onClick={onClick} item={item} key={item.id} />
        ))}
      </ul>
    );
  }
}

export default CartItems;
