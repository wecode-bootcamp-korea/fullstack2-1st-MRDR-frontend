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
        {/* 준범, undefined 여서 에러 발생하여 있는 경우에만 처리하도록 하였습니다. */}
        {colors[index].sizes
          ? colors[index].sizes.map(size => {
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
            })
          : null}
      </ul>
    );
  }
}

export default SizeButtonList;
