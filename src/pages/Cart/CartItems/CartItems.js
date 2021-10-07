import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import './CartItems.scss';

class CartItems extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="CartItems">
        {items.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    );
  }
}

export default CartItems;
