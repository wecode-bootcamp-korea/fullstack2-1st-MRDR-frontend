import React, { Component } from 'react';
import ColorOptionList from './ColorOptionList/ColorOptionList';
import SizeButtonList from './SizeButtonList/SizeButtonList';
import Line from '../Line';
import './OptionsContainer.scss';

class OptionsContainer extends Component {
  render() {
    const { colors, selectedColor, selectedSize, selectedList } = this.props;
    const { selectColor, selectSize, selectAmount } =
      this.props.selectionFunctions;

    return (
      <div className="OptionsContainer">
        <Line title="색상" margin="marginBottom10">
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>
              {selectedColor || '옵션을 선택해 주세요'}
            </p>
            <span className="topLineRight">{colors.length} options</span>
          </div>
        </Line>

        <ColorOptionList
          colors={colors}
          selectedColor={selectedColor}
          selectColor={selectColor}
        />

        <Line title="사이즈" margin="marginTop35">
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
        />
      </div>
    );
  }
}

export default OptionsContainer;
