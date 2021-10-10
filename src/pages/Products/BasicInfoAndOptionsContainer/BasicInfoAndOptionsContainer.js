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
      selectedList: [
        // {
        //   id: 1,
        //   color: '탭차콜',
        //   size: 2,
        //   amount: 10,
        // },
        // {
        //   id: 2,
        //   color: '핫코랄',
        //   size: 4,
        //   amount: 1,
        // },
      ],
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => {
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

  //필요없을 수도 있습니다.
  selectAmount = type => {
    const { selectedAmount } = this.state;
    if (type === 'increment') {
      this.setState({ selectedAmount: selectedAmount + 1 });
    }
    if (type === 'decrement') {
      if (selectedAmount !== 0) {
        this.setState({
          selectedAmount: selectedAmount - 1,
        });
      }
    }
  };

  addSelectedItem = (color, size) => {
    const { selectedList } = this.state;
    const option = {
      id: selectedList.length + 1,
      color: color,
      size: size,
      amount: 1,
    };
    // console.log('option basket:', option);
    this.setState({ selectedList: [...selectedList, option] });
  };

  deleteSelectedItem = itemId => {
    let selectedList = [...this.state.selectedList];
    selectedList = selectedList.filter(
      selectedItem => selectedItem.id !== itemId
    );
    this.setState({ selectedList });
  };

  render() {
    const {
      product,
      selectedColor,
      selectedSize,
      // selectedAmount,
      selectedList,
    } = this.state;
    const { name, price, salePrice, colors } = product;
    const {
      selectColor,
      selectSize,
      selectAmount,
      addSelectedItem,
      deleteSelectedItem,
    } = this;
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
        <BasicInfoContainer name={name} price={price} salePrice={salePrice} />
        <OptionsContainer
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedList={selectedList}
          selectionFunctions={selectionFunctions}
          addSelectedItem={addSelectedItem}
        />
        <SelectionsContainer
          name={name}
          price={salePrice || price}
          selectedList={selectedList}
          deleteSelectedItem={deleteSelectedItem}
        />
      </div>
    );
  }
}

export default BasicInfoAndOptionsContainer;
