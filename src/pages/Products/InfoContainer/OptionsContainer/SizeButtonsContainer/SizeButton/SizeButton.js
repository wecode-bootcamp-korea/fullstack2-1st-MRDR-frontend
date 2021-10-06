import React, { Component } from 'react';
import './SizeButton.scss';

class SizeButton extends Component {
  render() {
    const {
      size,
      selectedColor,
      selectedSize,
      selectColor,
      selectSize,
      incrementSelectedAmount,
    } = this.props;

    return (
      <button
        className={selectedColor ? 'SizeButton' : 'SizeButton disabled'}
        disabled={!selectedColor}
        onClick={
          // &&를 사용하여 두개이상의 함수를 실행시키는 방법을 찾을 예정
          selectedColor
            ? () => {
                incrementSelectedAmount();
                selectColor(); //to be fixed
                selectSize(selectedSize);
              }
            : null
        }
      >
        {size}
      </button>
    );
  }
}

export default SizeButton;
