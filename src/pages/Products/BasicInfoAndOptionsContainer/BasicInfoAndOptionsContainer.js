import React from 'react';
import BasicInfoContainer from './BasicInfoContainer/BasicInfoContainer';
import OptionsContainer from './OptionsContainer/OptionsContainer';
import SelectionsContainer from './SelectionsContainer/SelectionsContainer';
import './BasicInfoAndOptionsContainer.scss';

class BasicInfoAndOptionsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      selectedColor: null,
      selectedSize: null,
      selectedList: [
        // {
        //   id: 1,
        //   color: '탭차콜',
        //   size: 2,
        //   amount: 10,
        // },
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/products/3')
      .then(res => res.json())
      .then(res => {
        // console.log('res:', res);
        this.setState({ productInfo: res[0] });
      })
      .catch(err => console.log('fetch 에러1', err));
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

  addSelectedItem = (colorOptionId, color, size) => {
    const { selectedList } = this.state;
    const option = {
      id: colorOptionId,
      color,
      size,
      amount: 1,
    };
    this.setState({ selectedList: [...selectedList, option] });
  };

  deleteSelectedItem = itemId => {
    let selectedList = [...this.state.selectedList];
    selectedList = selectedList.filter(item => item.id !== itemId);
    this.setState({ selectedList });
  };

  handleAmount = (id, type) => {
    // NEED TO PROPERLY UPDATE STATE
    const { colors } = this.state.productInfo;
    let selectedList = [...this.state.selectedList];
    const index = selectedList.findIndex(item => item.id === id);
    // console.log('selectedList Before:', selectedList[index]); //이건 안 변해있습니다.
    // console.log('selectedList Before:', selectedList); // 이건 "selectedList[index].amount++"이 실행 되기도 전에 바껴있습니다.
    if (type === 'increment') {
      selectedList[index].amount === 30
        ? alert('최대 주문수량은 30개 입니다.')
        : selectedList[index].amount++;
      // console.log('selectedList AFTER +:', selectedList[index]);
      // console.log('selectedList AFTER +:', selectedList);
    }
    if (type === 'decrement') {
      selectedList[index].amount === 1
        ? alert('최소 주문수량은 1개 입니다.')
        : selectedList[index].amount--;
      // console.log('selectedList AFTER -:', selectedList[index]);
      // console.log('selectedList AFTER -:', selectedList);
    }
    this.setState({ selectedList }); // 0개에서 decrement하거나 30개에서 increment하려고 할떄 불필요하게 state update 됨
  };

  render() {
    const { productInfo, selectedColor, selectedSize, selectedList } =
      this.state;
    const { name, price, salePrice, colors } = productInfo;
    const {
      selectColor,
      selectSize,
      addSelectedItem,
      deleteSelectedItem,
      handleAmount,
    } = this;

    // console.log('selectedList:', selectedList);
    // console.log('productInfo:', productInfo);

    if (Object.keys(productInfo).length === 0) return null;
    return (
      <div className="BasicInfoAndOptionsContainer">
        <BasicInfoContainer name={name} price={price} salePrice={salePrice} />
        <OptionsContainer
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedList={selectedList}
          selectColor={selectColor}
          selectSize={selectSize}
          addSelectedItem={addSelectedItem}
        />
        <SelectionsContainer
          name={name}
          price={salePrice || price}
          selectedList={selectedList}
          deleteSelectedItem={deleteSelectedItem}
          handleAmount={handleAmount}
        />
      </div>
    );
  }
}

export default BasicInfoAndOptionsContainer;
