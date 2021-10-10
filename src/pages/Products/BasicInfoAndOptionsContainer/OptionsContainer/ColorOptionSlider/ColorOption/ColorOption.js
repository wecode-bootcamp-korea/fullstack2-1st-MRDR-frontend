import React, { Component } from 'react';
import './ColorOption.scss';

class ColorOption extends Component {
  clickOption = color => {
    const { selectColor, selectedSize, selectSize } = this.props;
    selectColor(color);
    if (selectedSize !== null) {
      // console.log('Unselect color');
      selectSize(selectedSize);
    }
  };

  render() {
    const { imgUrl, color, selectedColor, sizes } = this.props;
    const soldOut = sizes.every(size => size.quantity === 0);

    return (
      <li
        className={soldOut ? 'ColorOption soldout' : 'ColorOption'}
        onClick={
          soldOut
            ? () => alert('품절된 옵션입니다.')
            : () => this.clickOption(color)
        }
      >
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
