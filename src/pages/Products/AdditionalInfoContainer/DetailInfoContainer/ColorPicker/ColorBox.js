import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import './ColorBox.scss';

class ColorBox extends React.Component {
  render() {
    const { clickedColor, productColor, handleColorBtnClick } = this.props;
    return (
      <li className="ColorBox">
        <button
          className="colorBtn"
          style={{ color: productColor.colorHexCode }}
          onClick={() => handleColorBtnClick(productColor)}
        >
          <FontAwesomeIcon
            icon={
              clickedColor.id === productColor.id ? faCheckCircle : solidCircle
            }
          />
        </button>
      </li>
    );
  }
}

export default ColorBox;
