import React, { Component } from 'react';
import SizeButton from './SizeButton/SizeButton';
import './SizeButtonList.scss';

class SizeButtonList extends Component {
  render() {
    const { colors, selectedColor, selectedSize, selectSize, selectAmount } =
      this.props;

    const index = selectedColor
      ? colors.findIndex(color => color.name === selectedColor)
      : 0; //temp

    return (
      <ul className="SizeButtonList">
        {colors[index].sizes.map(size => {
          return (
            <SizeButton
              key={size.id}
              size={size.value}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              selectSize={selectSize}
              selectAmount={selectAmount}
            />
          );
        })}
      </ul>
    );
  }
}

export default SizeButtonList;
