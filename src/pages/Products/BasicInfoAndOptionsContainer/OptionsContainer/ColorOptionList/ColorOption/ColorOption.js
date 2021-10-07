import React, { Component } from 'react';
import './ColorOption.scss';

class ColorOption extends Component {
  render() {
    const { imgUrl, color, selectedColor, selectColor } = this.props;

    console.log('ColorOption selectedColor:', selectedColor);

    return (
      <li className="ColorOption" onClick={() => selectColor(color)}>
        <img
          className={color === selectedColor ? 'selected' : ''}
          src={imgUrl}
          alt={color}
        />
        <p className="colorName">{color}</p>
      </li>
    );
  }
}

export default ColorOption;
