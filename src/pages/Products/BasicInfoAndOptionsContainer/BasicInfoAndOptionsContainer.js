import React from 'react';
import BasicInfoContainer from './BasicInfoContainer/BasicInfoContainer';
import OptionsContainer from './OptionsContainer/OptionsContainer';
import SelectionsContainer from './SelectionsContainer/SelectionsContainer';
import './BasicInfoAndOptionsContainer.scss';

class BasicInfoAndOptionsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      selectedColor: null,
      selectedSize: null,
      selectedAmount: 0,
      selectedList: [],
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => {
        console.log('res:', res);
        if (res.MESSAGE === 'SUCCESS') {
          this.setState({ product: res.PRODUCT_INFO_DATA[0] });
        }
      })
      .catch(err => console.log('fetch 에러', err));
  }

  selectColor = color => {
    this.setState({
      selectedColor: this.state.selectedColor === color ? null : color,
    });
  };

  selectSize = size => {
    this.setState({
      selectedSize: this.state.selectedSize === size ? null : size,
    });
  };

  selectAmount = type => {
    const { selectedAmount } = this.state;
    if (type === 'increment') {
      console.log('selectAmount INCREMENT');
      this.setState({ selectedAmount: selectedAmount + 1 });
    }
    if (type === 'decrement') {
      if (selectedAmount !== 0) {
        console.log('selectAmount DECREMENT');
        this.setState({
          selectedAmount: selectedAmount - 1,
        });
      }
    }
  };

  handleSelectedList = (index, type) => {
    const option = {
      id: index + 1,
      color: this.state.selectedColor,
      size: this.state.selectedSize,
      amount: 1,
    };
    console.log('option basket:', option);
    // type is "add" or "remove"
    const selectedList = [...this.state.selectedList];
    console.log('variable selectedList:', selectedList);

    // this.setState({selectedList: })
  };

  render() {
    const {
      product,
      selectedColor,
      selectedSize,
      selectedAmount,
      selectedList,
    } = this.state;
    const { name, price, salePrice, colors } = product;
    const { selectColor, selectSize, selectAmount } = this;
    // const selections = {
    //   selectedColor,
    //   selectedSize,
    //   selectedAmount,
    // };
    const selectionFunctions = {
      selectColor,
      selectSize,
      selectAmount,
    };

    if (Object.keys(product).length === 0) return null;

    return (
      <div className="BasicInfoAndOptionsContainer">
        <BasicInfoContainer
          productName={name}
          price={price}
          salePrice={salePrice}
        />
        <OptionsContainer
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedList={selectedList}
          selectionFunctions={selectionFunctions}
        />
        <SelectionsContainer
          price={salePrice || price}
          selectedColor={selectedColor}
          selectedAmount={selectedAmount}
          selectedList={selectedList}
          handleSelectedList={this.handleSelectedList}
        />
      </div>
    );
  }
}

export default BasicInfoAndOptionsContainer;
