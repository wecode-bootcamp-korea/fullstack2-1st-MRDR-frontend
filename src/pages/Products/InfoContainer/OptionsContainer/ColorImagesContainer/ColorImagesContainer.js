import React, { Component } from 'react';
import Image from './Image/Image';
import './ColorImagesContainer.scss';

class ColorImagesContainer extends Component {
  render() {
    const { colors, selectedColor, selectColor } = this.props;

    return (
      <div className="ColorImagesContainer">
        {colors.map(color => {
          const { id, img, name } = color;
          return (
            <div key={id} className="colorOptionWrapper">
              <Image
                imgUrl={img}
                color={name}
                selectedColor={selectedColor}
                selectColor={selectColor}
              />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColorImagesContainer;
