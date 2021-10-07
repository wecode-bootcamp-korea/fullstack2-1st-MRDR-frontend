import React from 'react';
import ImageSlideItem from '../components/ImageSlideItem/ImageSlideItem';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  render() {
    const { curIndex } = this.props;
    return (
      <article className="ImageSliderContainer">
        <ul
          className="imageSlider"
          style={{
            transform: `translateX(${-curIndex * 308 * 4}px)`,
          }}
        >
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
          <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        </ul>
      </article>
    );
  }
}

export default ImageSlider;
