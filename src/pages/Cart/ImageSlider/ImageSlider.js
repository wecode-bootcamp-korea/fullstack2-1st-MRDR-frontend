import React from 'react';
import CartFuncContext from '../CartFuncContext';
import ImageSlideItem from '../components/ImageSlideItem/ImageSlideItem';
import { failAlert } from '../../../util/cart';
import { ROUTES } from '../../../util/constants';
import { getFetch } from '../../../util/fetch';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  static contextType = CartFuncContext;

  componentDidMount = async () => {
    const actionFunc = this.context('fillRecommendState');
    const failFunc = failAlert;
    await getFetch(ROUTES.CART_RECOMMENT, { actionFunc, failFunc });
  };

  render() {
    const { curIndex, cartRecomment } = this.props;
    return (
      <article className="ImageSliderContainer">
        <ul
          className="imageSlider"
          style={{
            transform: `translateX(${-curIndex * 308 * 4}px)`,
          }}
        >
          {!!cartRecomment.length &&
            cartRecomment.map(item => (
              <ImageSlideItem item={item} key={item.id} />
            ))}
        </ul>
      </article>
    );
  }
}

export default ImageSlider;
