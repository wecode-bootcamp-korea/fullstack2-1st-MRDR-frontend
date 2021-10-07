import React from 'react';
import Button from '../components/Button/Button';
import './NumberControlButton.scss';

class NumberControlButton extends React.Component {
  render() {
    return (
      <div className="NumberControlButton">
        <Button id="cartProductPlusBtn" name="-" />
        <span>1</span>
        <Button id="cartProductMinusBtn" name="+" />
      </div>
    );
  }
}

export default NumberControlButton;
