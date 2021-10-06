import React from 'react';
import BasicInfoContainer from './BasicInfoContainer/BasicInfoContainer';
import OptionsContainer from './OptionsContainer/OptionsContainer';
import SelectionsContainer from './SelectionsContainer/SelectionsContainer';
import PRODUCT_INFO_DATA from '../InfoContainer/data';

import './InfoContainer.scss';

class InfoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      product: PRODUCT_INFO_DATA[0],
      selectedColor: null,
      selectedSize: null,
      selectedAmount: 0,
    };
  }

  selectColor = color => {
    this.setState({
      selectedColor: this.state.selectedColor === color ? null : color,
    });
  };

  selectSize = size => {
    this.setState({ selectedSize: size });
  };

  incrementSelectedAmount = () => {
    this.setState({ selectedAmount: this.state.selectedAmount + 1 });
  };

  decrementSelectedAmount = () => {
    const { selectedAmount } = this.state;
    if (selectedAmount !== 0) {
      this.setState({
        selectedAmount: selectedAmount - 1,
      });
    }
  };

  render() {
    const { selectedColor, selectedSize, selectedAmount } = this.state;
    const { name, price, salePrice, colors } = this.state.product;
    //passing too much data to child components. change product to product.colors or something smaller

    return (
      <div className="InfoContainer">
        <BasicInfoContainer
          productName={name}
          price={price}
          salePrice={salePrice}
        />
        <OptionsContainer
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColor={this.selectColor}
          selectSize={this.selectSize}
          incrementSelectedAmount={this.incrementSelectedAmount}
        />
        <SelectionsContainer
          price={salePrice || price}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedAmount={selectedAmount}
        />
      </div>
    );
  }
}

export default InfoContainer;
