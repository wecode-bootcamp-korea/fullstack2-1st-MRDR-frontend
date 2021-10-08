import React from 'react';
import CartPresenter from './CartPresenter';
import { BTNAME, ROUTES } from '../../util/constants';
import { getFetch } from '../../util/fetch';
import { failAlert } from '../../util/cart';

class CartContainer extends React.Component {
  state = { curIndex: 0, items: [], cartRecomment: [] };

  componentDidMount = async () => {
    const actionFunc = items => this.setState(() => ({ items }));
    const failFunc = failAlert;
    await getFetch(ROUTES.CART, { actionFunc, failFunc });
  };

  fillRecommendState = cartRecomment => {
    this.setState(() => ({ cartRecomment }));
  };

  imgSliderOnClick = id => {
    const { curIndex, cartRecomment } = this.state;

    switch (id) {
      case BTNAME.RIGHT:
        if (cartRecomment.length / 4 === curIndex + 1) return;
        return this.setState(() => ({ curIndex: curIndex + 1 }));

      case BTNAME.LEFT:
        if (!curIndex) return;
        return this.setState(() => ({ curIndex: curIndex - 1 }));

      default:
        break;
    }
  };

  addCartNumber = (id, btnId) => {
    this.setState(({ items }) => {
      for (let item of items) {
        if (item.id === id) {
          switch (btnId) {
            case BTNAME.PLUS:
              item.count = item.count !== undefined ? ++item.count : 1;
              break;
            case BTNAME.MINUS:
              item.count = item.count && --item.count;
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
