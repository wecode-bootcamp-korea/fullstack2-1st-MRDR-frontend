import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import Button from './components/Button/Button';
import CartHeader from './CartHeader/CartHeader';
import CartMainTitle from './CartMainTitle/CartMainTitle';
import Title from './components/Title/Title';
import CartListArticle from './CartListArticle/CartListArticle';
import { BTNAME, ERRORS, ROUTES } from '../../util/constances';
import { getFetch } from '../../util/fetch';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curIndex: 0, items: [] };
    this.virtualProps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  componentDidMount = async () => {
    const actioinFunc = items => this.setState(() => ({ items }));
    const failFunc = () => alert(ERRORS[400]);
    await getFetch(ROUTES.CART, { actioinFunc, failFunc });
  };

  imgSliderOnClick = e => {
    const { curIndex } = this.state;
    const { id } = e.target;

    switch (id) {
      case BTNAME.RIGHT:
        if (this.virtualProps.length / 4 === curIndex + 1) return;
        return this.setState(() => ({ curIndex: curIndex + 1 }));

      case BTNAME.LEFT:
        if (!curIndex) return;
        return this.setState(() => ({ curIndex: curIndex - 1 }));

      default:
        break;
    }
  };

  checkBoxOnClick = id => {
    const { items } = this.state;
    this.setState(() => {
      for (let item of items) {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
          return { items };
        }
      }
    });
  };

  render() {
    const { curIndex, items } = this.state;
    return (
      <div className="Cart">
        <div className="cartWrapper">
          <CartHeader />
          <main>
            <CartMainTitle onClick={this.checkBoxOnClick} />
            <CartListArticle onClick={this.checkBoxOnClick} items={items} />
            <Title title="이 상품 어때요?" className="recommendTitle" />
            <div className="sliderArticleWrapper">
              <Button
                id="leftSliderBtn"
                name="〈"
                onClick={this.imgSliderOnClick}
              />
              <ImageSlider curIndex={curIndex} />
              <Button
                id="rightSliderBtn"
                name="〉"
                onClick={this.imgSliderOnClick}
              />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Cart;
