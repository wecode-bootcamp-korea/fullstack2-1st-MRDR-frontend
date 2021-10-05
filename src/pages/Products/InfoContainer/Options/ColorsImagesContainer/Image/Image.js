import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {
  render() {
    const { imgUrl, color, selectColor } = this.props;

    return (
      <div className="Image" onClick={() => selectColor(color)}>
        <img src={imgUrl} alt={color} />
      </div>
    );
  }
}

export default Image;
