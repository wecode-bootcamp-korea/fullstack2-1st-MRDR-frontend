import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import CartHeader from './CartHeader/CartHeader';
import CartMainTitle from './CartMainTitle/CartMainTitle';
import CartListArticle from './CartListArticle/CartListArticle';
import CartFuncContext from './CartFuncContext';
import { CARTFUNCS } from './constants';
import Title from '../../components/Title/Title';
import './CartPresenter.scss';

class CartPresenter extends React.Component {
  render() {
    const { curIndex, items, cartRecomment, cartMethodMapper } = this.props;
    const getCartCount = cartMethodMapper(CARTFUNCS.getCartCount);

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
                <ImageSlider
                  curIndex={curIndex}
                  cartRecomment={cartRecomment}
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
