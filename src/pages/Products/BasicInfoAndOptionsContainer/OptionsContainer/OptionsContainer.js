import React, { Component } from 'react';
import ColorOptionSlider from './ColorOptionSlider/ColorOptionSlider';
import SizeButtonList from './SizeButtonList/SizeButtonList';
import Line from '../Line';
import './OptionsContainer.scss';

class OptionsContainer extends Component {
  render() {
    const {
      colors,
      selectedColor,
      selectedSize,
      selectedList,
      addSelectedItem,
    } = this.props;
    const { selectColor, selectSize, selectAmount } =
      this.props.selectionFunctions;

    return (
      <div className="OptionsContainer">
        <Line title="색상" margin="0 0 10px">
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>
              {selectedColor || '옵션을 선택해 주세요'}
            </p>
            <span className="topLineRight">{colors.length} options</span>
          </div>
        </Line>

        <ColorOptionSlider
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColor={selectColor}
          selectSize={selectSize}
        />

        <Line title="사이즈" margin="35px 0 0">
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>
              {selectedSize !== null ? selectedSize : '옵션을 선택해 주세요'}
            </p>
          </div>
        </Line>

        <SizeButtonList
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectSize={selectSize}
          selectAmount={selectAmount}
          selectedList={selectedList}
          addSelectedItem={addSelectedItem}
        />
      </div>
    );
  }
}

export default OptionsContainer;
