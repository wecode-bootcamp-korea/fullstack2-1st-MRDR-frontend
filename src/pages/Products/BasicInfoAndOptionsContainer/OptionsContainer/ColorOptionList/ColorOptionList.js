import React, { Component } from 'react';
import ColorOption from './ColorOption/ColorOption';
import './ColorOptionList.scss';

class ColorOptionList extends Component {
  render() {
    const { colors, selectedColor, selectColor } = this.props;

    return (
      <ul className="ColorOptionList">
        {colors.map(color => {
          const { id, img, name } = color;
          return (
            <ColorOption
              key={id}
              imgUrl={img}
              color={name}
              selectedColor={selectedColor}
              selectColor={selectColor}
            />
          );
        })}
      </ul>
    );
  }
}

export default ColorOptionList;
