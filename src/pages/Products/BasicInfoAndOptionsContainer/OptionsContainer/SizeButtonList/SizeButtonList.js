import React, { Component } from 'react';
import SizeButton from './SizeButton/SizeButton';
import './SizeButtonList.scss';

class SizeButtonList extends Component {
  render() {
    const {
      colors,
      selectedColor,
      selectedSize,
      selectSize,
      selectedList,
      addSelectedItem,
    } = this.props;

    const index = selectedColor
      ? colors.findIndex(color => color.name === selectedColor)
      : 0; //temp

    return (
      <ul className="SizeButtonList">
        {colors[index].sizes.map(size => {
          return (
            <SizeButton
              key={size.id}
              colorOptionId={size.id}
              size={size.value}
              quantity={size.quantity}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              selectSize={selectSize}
              selectedList={selectedList}
              addSelectedItem={addSelectedItem}
            />
          );
        })}
      </ul>
    );
  }
}

export default SizeButtonList;
