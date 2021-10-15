import React from 'react';
import { basicImageUrl } from '../../../../util/constants';
import './ImageSlideItem.scss';

class ImageSlideItem extends React.Component {
  render() {
    const { price, imageUrl, name } = this.props.item;
    console.log(imageUrl);
    return (
      <li className="ImageSlideItem">
        <img alt={name} className="itemImg" src={imageUrl || basicImageUrl} />
        <div className="itemInfo">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </li>
    );
  }
}

export default React.memo(ImageSlideItem);
