import React from 'react';
import CartPresenter from './CartPresenter';
import { BTNAME, ROUTES } from '../../util/constants';
import { failAlert, getFetch } from '../../util/fetch';

class CartContainer extends React.Component {
  state = { items: [], cartRecomment: [] };

  componentDidMount = async () => {
    const actionFunc = items => this.setState({ items });
    const failFunc = failAlert;
    await getFetch(ROUTES.CART, { actionFunc, failFunc });
  };

  fillRecommendState = cartRecomment => {
    this.setState({ cartRecomment });
  };

  addCartNumber = (id, btnId) => {
    this.setState(({ items }) => {
      for (let item of items) {
        if (item.id === id) {
          switch (btnId) {
            case BTNAME.PLUS:
              ++item.count;
              break;

            case BTNAME.MINUS:
              item.count = item.count - 1 <= 0 ? 0 : --item.count;
              break;

            default:
              break;
          }
          return { items };
        }
      }
    });
  };

  deleteCheckedItem = () => {
    this.setState(({ items }) => {
      const newItems = items.filter(item => !item.isChecked);
      return { items: newItems };
    });
  };

  checkBoxOnClick = id => {
    this.setState(({ items }) => {
      for (let item of items) {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
          return { items };
        }
      }
    });
  };

  checkAllBoxOnClick = () => {
    this.setState(({ items }) => {
      for (let item of items) {
        item.isChecked = !item.isChecked;
      }
      return { items };
    });
  };

  getCartCount = () => {
    const { items } = this.state;
    const totalCount = items.length;
    const curCount = items.filter(item => item.isChecked).length;
    return { curCount, totalCount };
  };

  deleteCartById = id => {
    this.setState(({ items }) => {
      const newItem = items.filter(item => item.id !== id);
      return { items: newItem };
    });
  };

  cartMethodMapper = key => this[key];

  render() {
    const { state, cartMethodMapper } = this;
    return <CartPresenter {...state} cartMethodMapper={cartMethodMapper} />;
  }
}

export default CartContainer;
