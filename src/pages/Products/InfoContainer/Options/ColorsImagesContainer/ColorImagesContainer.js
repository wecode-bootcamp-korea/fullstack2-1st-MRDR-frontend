import React, { Component } from 'react';
import Image from './Image/Image';
import './ColorImagesContainer.scss';

class ColorImagesContainer extends Component {
  render() {
    const { product, selectColor } = this.props;

    return (
      <div className="ColorImagesContainer">
        {product.colors.map(color => {
          return (
            <div key={color.id} className="colorOptionWrapper">
              <Image
                imgUrl={color.img}
                color={color.name}
                selectColor={selectColor}
              />
              <p>{color.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColorImagesContainer;
