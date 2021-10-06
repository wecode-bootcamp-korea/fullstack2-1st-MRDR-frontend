import React from 'react';
import './SubImage.scss';

class SubImage extends React.Component {
  render() {
    const { id, imageUrl, handleImageHoverEvent } = this.props;
    return (
      <div
        className="SubImage"
        onMouseEnter={() => handleImageHoverEvent(id, imageUrl)}
      >
        <img className="image" src={imageUrl} alt="" />
      </div>
    );
  }
}

export default SubImage;
