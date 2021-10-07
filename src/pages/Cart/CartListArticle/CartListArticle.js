import React from 'react';
import PricesBox from '../PricesBox/PricesBox';
import CartItems from '../CartItems/CartItems';
import './CartListArticle.scss';

class CartListArticle extends React.Component {
  render() {
    return (
      <article className="CartListArticle">
        <CartItems {...this.props} />
        <div className="sideMenus">
          <PricesBox />
        </div>
      </article>
    );
  }
}

export default CartListArticle;
