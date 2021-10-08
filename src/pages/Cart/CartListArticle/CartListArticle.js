import React from 'react';
import PricesBox from '../PricesBox/PricesBox';
import CartItems from '../CartItems/CartItems';
import { priceCaculator } from '../utils';
import './CartListArticle.scss';

class CartListArticle extends React.Component {
  render() {
    const { items } = this.props;
    const prices = priceCaculator(Array.from(items)) || {
      originPrice: 0,
      discountPrice: 0,
    };
    return (
      <article className="CartListArticle">
        <CartItems {...this.props} />
        <div className="sideMenus">
          <PricesBox prices={prices} />
        </div>
      </article>
    );
  }
}

export default CartListArticle;
