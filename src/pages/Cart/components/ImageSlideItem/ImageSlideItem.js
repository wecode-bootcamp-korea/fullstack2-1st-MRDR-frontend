import React from 'react';
import './ImageSlideItem.scss';

class ImageSlideItem extends React.Component {
  render() {
    const { price, image, name } = this.props.item;
    return (
      <li className="ImageSlideItem">
        <img alt={name} className="itemImg" src={image} />
        <div className="itemInfo">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </li>
    );
  }
}

export default React.memo(ImageSlideItem);
