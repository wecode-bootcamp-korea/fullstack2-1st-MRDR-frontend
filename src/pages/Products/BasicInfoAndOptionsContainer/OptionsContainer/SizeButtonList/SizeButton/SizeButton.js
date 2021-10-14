import React, { Component } from 'react';
import './SizeButton.scss';

class SizeButton extends Component {
  clickButton = () => {
    const {
      colorOptionId,
      size,
      quantity,
      selectedColor,
      selectedSize,
      selectSize,
      selectedList,
      addSelectedItem,
    } = this.props;

    // 색상/사이즈 콤보에 재고가 없는데 사이즈 버튼 누를 때
    if (selectedColor && quantity === 0) {
      return;
    }

    // 선택되어있는 사이즈 버튼을 또 누를 때 selectedSize === null로 바꾸기
    if (selectedColor && selectedSize === size) return selectSize(size);

    // 사이즈 정상적으로 선택시
    selectSize(size);
    if (
      selectedList.some(
        item => item.color === selectedColor && item.size === size
      )
    ) {
      //선택한 색상/사이즈 콤보가 이미 밑에 있는 item 중 하나이면 alert
      alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.');
    } else {
      //선택한 색상/사이즈 콤보가 아직 고르지 않은 색상/사이즈 콤보이면
      addSelectedItem(colorOptionId, selectedColor, size);
    }
  };

  alertUser = () => {
    alert('색상을 먼저 선택해주세요');
  };

  getClasses = () => {
    const { size, quantity, selectedColor, selectedSize } = this.props;
    let classes = 'SizeButton ';
    if (!selectedColor) {
      classes += 'disabled ';
    }
    if (selectedSize === size) {
      classes += 'selected ';
    }
    if (selectedColor && quantity === 0) {
      classes += 'outOfStock ';
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
