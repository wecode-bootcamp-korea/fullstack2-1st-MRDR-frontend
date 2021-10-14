import React, { Component } from 'react';
import './SizeButton.scss';

class SizeButton extends Component {
  clickButton = () => {
    const {
      size,
      selectedColor,
      selectedSize,
      selectSize,
      selectAmount,
      selectedList,
      addSelectedItem,
    } = this.props;

    selectSize(size); //selectSize랑 selectAmount 한 함수에다가 합칠 수 있을 듯 ->> don't need these states?
    if (selectedSize !== size) {
      selectAmount('increment');
    }
    // console.log('selectedList:', selectedList);
    if (
      selectedList.some(selectedItem => {
        return (
          selectedItem.color === selectedColor && selectedItem.size === size
        );
      })
    ) {
      //이미 SelectedItem 중 하나이면
      alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.');
    } else {
      //아직 고르지 않은 색상/사이즈 콤보이면
      addSelectedItem(selectedColor, size);
    }
  };

  alertUser = () => {
    alert('색상을 먼저 선택해주세요');
  };

  getClasses = () => {
    const { size, selectedColor, selectedSize } = this.props;
    // console.log('selectedSize:', selectedSize);
    let classes = 'SizeButton ';
    if (!selectedColor) {
      classes += 'disabled ';
    }
    if (selectedSize === size) {
      classes += 'selected ';
    }
    // console.log('classes:', classes);
    return classes;
  };

  render() {
    const { size, selectedColor } = this.props;

    return (
      <li
        className={this.getClasses()}
        onClick={selectedColor ? this.clickButton : this.alertUser}
      >
        {size}
      </li>
    );
  }
}

export default SizeButton;
