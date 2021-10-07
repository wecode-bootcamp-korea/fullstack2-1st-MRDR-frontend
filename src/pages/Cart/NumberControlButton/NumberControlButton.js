import React from 'react';
import CartFuncContext from '../CartFuncContext';
import Button from '../components/Button/Button';
import { BTNAME, CARTFUNCS } from '../../../util/constants';
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
          name="-"
          onClick={() => onClick(id, BTNAME.MINUS)}
        />
        <span>{count || 0}</span>
        <Button
          id={BTNAME.PLUS}
          name="+"
          onClick={() => onClick(id, BTNAME.PLUS)}
        />
      </div>
    );
  }
}

export default NumberControlButton;
