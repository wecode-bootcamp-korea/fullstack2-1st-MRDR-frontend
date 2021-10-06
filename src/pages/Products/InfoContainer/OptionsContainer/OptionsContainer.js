import React, { Component } from 'react';
import ColorImagesContainer from './ColorImagesContainer/ColorImagesContainer';
import SizeButtonsContainer from './SizeButtonsContainer/SizeButtonsContainer';
import Line from '../Line';
import './OptionsContainer.scss';

class OptionsContainer extends Component {
  render() {
    const {
      colors,
      selectColor,
      selectSize,
      selectedColor,
      selectedSize,
      incrementSelectedAmount,
    } = this.props;

    return (
      <div className="OptionsContainer">
        <Line title="색상" margin="marginBottom10">
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>옵션을 선택해 주세요
            </p>
            <span className="topLineRight">{colors.length} options</span>
          </div>
        </Line>

        <ColorImagesContainer
          colors={colors}
          selectedColor={selectedColor}
          selectColor={selectColor}
        />

        <Line title="사이즈" margin="marginTop35">
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>옵션을 선택해 주세요
            </p>
          </div>
        </Line>

        <SizeButtonsContainer
          colors={colors}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectColor={selectColor}
          selectSize={selectSize}
          incrementSelectedAmount={incrementSelectedAmount}
        />
      </div>
    );
  }
}

export default OptionsContainer;
