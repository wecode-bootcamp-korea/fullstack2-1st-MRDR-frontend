import React from 'react';
import './SubImage.scss';

class SubImage extends React.Component {
  render() {
    const { imageUrl, handleImageHoverEvent } = this.props;
    return (
      <div
        className="SubImage"
        onMouseEnter={() => handleImageHoverEvent(imageUrl)}
      >
        <img className="image" src={imageUrl} alt="상품 이미지" />
      </div>
    );
  }
}

export default SubImage;
