import React, { Component } from 'react';
import SizeButton from './SizeButton/SizeButton';
import './SizeButtonsContainer.scss';

class SizeButtonsContainer extends Component {
  render() {
    const {
      colors,
      selectedColor,
      selectedSize,
      selectColor,
      selectSize,
      incrementSelectedAmount,
    } = this.props;

    const index = selectedColor
      ? colors.findIndex(color => color.name === selectedColor)
      : 0; //temp

    return (
      <div className="SizeButtonsContainer">
        {colors[index].sizes.map(size => {
          return (
            <SizeButton
              key={size.id}
              size={size.value}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              selectColor={selectColor}
              selectSize={selectSize}
              incrementSelectedAmount={incrementSelectedAmount}
            />
          );
        })}
      </div>
    );
  }
}

export default SizeButtonsContainer;
