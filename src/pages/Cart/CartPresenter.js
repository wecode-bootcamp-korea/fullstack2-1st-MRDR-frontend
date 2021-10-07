import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import Button from './components/Button/Button';
import CartHeader from './CartHeader/CartHeader';
import CartMainTitle from './CartMainTitle/CartMainTitle';
import Title from './components/Title/Title';
import CartListArticle from './CartListArticle/CartListArticle';
import { BTNAME } from '../../util/constants';
import CartFuncContext from './CartFuncContext';
import './CartPresenter.scss';

class CartPresenter extends React.Component {
  render() {
    const { curIndex, items, cartRecomment, cartMethodMapper } = this.props;
    const imgSliderOnClick = cartMethodMapper('imgSliderOnClick');
    const getCartCount = cartMethodMapper('getCartCount');

    return (
      <CartFuncContext.Provider value={cartMethodMapper}>
        <div className="CartPresenter">
          <div className="cartWrapper">
            <CartHeader />
            <main>
              <CartMainTitle
                counts={getCartCount() || { curCount: 0, totalCount: 0 }}
              />
              <CartListArticle items={items} />
              <Title title="이 상품 어때요?" className="recommendTitle" />
              <div className="sliderArticleWrapper">
                <Button
                  id={BTNAME.LEFT}
                  name="〈"
                  onClick={() => imgSliderOnClick(BTNAME.LEFT)}
                />
                <ImageSlider
                  curIndex={curIndex}
                  cartRecomment={cartRecomment}
                />
                <Button
                  id={BTNAME.RIGHT}
                  name="〉"
                  onClick={() => imgSliderOnClick(BTNAME.RIGHT)}
                />
              </div>
            </main>
          </div>
        </div>
      </CartFuncContext.Provider>
    );
  }
}

export default CartPresenter;
