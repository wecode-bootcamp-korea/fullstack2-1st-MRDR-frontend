import React, { Component } from 'react';
import './SizeButton.scss';

class SizeButton extends Component {
  clickButton = () => {
    console.log('SizeButton click');
    const { size, selectedSize, selectSize, selectAmount } = this.props;
    selectSize(size);
    if (selectedSize !== size) {
      selectAmount('increment');
    }
  };

  alertUser = () => {
    alert('색상을 먼저 선택해주세요');
  };

  getClasses = () => {
    const { size, selectedColor, selectedSize } = this.props;
    console.log('selectedSize:', selectedSize);
    let classes = 'SizeButton ';
    if (!selectedColor) {
      classes += 'disabled ';
    }
    if (selectedSize === size) {
      classes += 'selected ';
    }
    console.log('classes:', classes);
    return classes;
  };

  render() {
    const { size, selectedColor } = this.props;

    return (
      <li
        className={this.getClasses()}
        onClick={selectedColor ? this.clickButton : this.alertUser}
      >
        {size}
      </li>
    );
  }
}

export default SizeButton;
