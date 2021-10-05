import React from 'react';
import './ImageSlider.scss';
import ImageSlideItem from '../ImageSlideItem/ImageSlideItem';

class ImageSlider extends React.Component {
  render() {
    return (
      <ul className="ImageSlider">
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
      </ul>
    );
  }
}

export default ImageSlider;
