import React from 'react';
import Button from '../../../components/Button/Button';
import { BTNAME } from '../../../util/constants';
import CartFuncContext from '../CartFuncContext';
import { CARTFUNCS } from '../constants';
import './NumberControlButton.scss';

class NumberControlButton extends React.Component {
  static contextType = CartFuncContext;
  render() {
    const { count, id } = this.props;
    const onClick = this.context(CARTFUNCS.addCartNumber);
    return (
      <div className="NumberControlButton">
        <Button
          id={BTNAME.MINUS}
          message="-"
          onClick={() => onClick(id, BTNAME.MINUS)}
        />
        <span>{count}</span>
        <Button
          id={BTNAME.PLUS}
          message="+"
          onClick={() => onClick(id, BTNAME.PLUS)}
        />
      </div>
    );
  }
}

export default NumberControlButton;
