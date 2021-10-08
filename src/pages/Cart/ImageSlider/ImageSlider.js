import React from 'react';
import ImageSlideItem from '../components/ImageSlideItem/ImageSlideItem';
import { failAlert, getFetch } from '../../../util/fetch';
import { BTNAME, ROUTES } from '../../../util/constants';
import Button from '../../../components/Button/Button';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  state = { curIndex: 0, cartRecomment: [] };

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

  componentDidMount = async () => {
    const actionFunc = this.fillRecommendState;
    const failFunc = failAlert;
    await getFetch(ROUTES.CART_RECOMMENT, { actionFunc, failFunc });
  };

  fillRecommendState = cartRecomment => {
    this.setState({ cartRecomment });
  };

  render() {
    const { cartRecomment, curIndex } = this.state;
    return (
      <article className="ImageSliderContainer">
        <Button
          id={BTNAME.LEFT}
          name="〈"
          onClick={() => this.imgSliderOnClick(BTNAME.LEFT)}
        />

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
        <Button
          id={BTNAME.RIGHT}
          name="〉"
          onClick={() => this.imgSliderOnClick(BTNAME.RIGHT)}
        />
      </article>
    );
  }
}

export default ImageSlider;
