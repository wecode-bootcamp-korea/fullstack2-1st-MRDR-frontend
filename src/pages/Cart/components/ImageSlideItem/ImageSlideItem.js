import React from 'react';
import './ImageSlider.scss';

class ImageSlideItem extends React.Component {
  render() {
    const {
      props: { price, src, name },
    } = this;
    return (
      <li className="ImageSlideItem">
        <img alt={name} className="itemImg" src={src} />
        <div className="itemInfo">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </li>
    );
  }
}

export default ImageSlideItem;
