import React, { Component } from 'react';
import './ColorOption.scss';

class ColorOption extends Component {
  clickOption = color => {
    const { selectColor, selectedSize, selectSize } = this.props;
    selectColor(color);
    if (selectedSize !== null) {
      selectSize(selectedSize);
    }
  };

  getSoldOutStatus = () => {
    const { sizes } = this.props;
    const isSoldOut = sizes.every(size => size.quantity === 0);
    return isSoldOut;
  };

  getClasses = () => {
    // RENDERING WAY TOO MUCH
    const { isMouseDown } = this.props;
    let classes = 'ColorOption ';
    if (isMouseDown) classes += 'dragging ';
    if (this.getSoldOutStatus()) classes += 'soldout ';
    // console.log('classes:', classes);
    return classes;
  };

  render() {
    const { imgUrl, color, selectedColor } = this.props;

    // console.log('RENDERING TOO MUCH');

    return (
      <li
        // className={soldOut ? 'ColorOption soldout' : 'ColorOption'}
        className={this.getClasses()}
        onClick={
          this.getSoldOutStatus()
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
