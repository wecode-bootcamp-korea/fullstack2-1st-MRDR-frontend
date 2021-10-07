import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import ColorBox from './ColorBox';
import './ColorPicker.scss';

class ColorPicker extends React.Component {
  render() {
    const { productColorList, handleColorBtnClick, clickedColor } = this.props;
    return (
      <div className="ColorPicker">
        <ul className="colorList">
          {productColorList.map((productColorSet, index) => {
            const key = index + 1;
            return (
              <div className="colorSet" key={key}>
                {productColorSet.map(productColor => {
                  return (
                    <ColorBox
                      key={productColor.id}
                      clickedColor={clickedColor}
                      productColor={productColor}
                      handleColorBtnClick={handleColorBtnClick}
                    />
                  );
                })}
              </div>
            );
          })}
        </ul>
        <div className="pickedColorWrapper">
          <p className="pickedColorText">
            <span className="pickedColor">
              <FontAwesomeIcon
                style={{ color: clickedColor.colorHexCode }}
                icon={solidCircle}
              />
            </span>
            &nbsp;
            {clickedColor.colorName}
          </p>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
