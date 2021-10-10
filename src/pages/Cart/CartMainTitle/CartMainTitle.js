import React from 'react';
import { CHECKBOX } from '../../../util/constants';
import CartFuncContext from '../CartFuncContext';
import BasicCheckBox from '../components/BasicCheckBox/BasicCheckBox';
import { CARTFUNCS } from '../constants';
import './CartMainTitle.scss';

class CartMainTitle extends React.Component {
  static contextType = CartFuncContext;

  render() {
    const { curCount, totalCount } = this.props.counts;
    const onClick = this.context(CARTFUNCS.deleteCheckedItem);
    const checkAllBoxOnClick = this.context(CARTFUNCS.checkAllBoxOnClick);

    return (
      <div className="mainTitleWrapper">
        <div className="mainTitle">
          <BasicCheckBox
            {...this.props}
            onClick={checkAllBoxOnClick}
            className="CheckBox"
            id={CHECKBOX.CHECKALL}
            label={`전체선택(${curCount}/${totalCount})`}
          />
          <span onClick={onClick} className="deleteAllCart">
            선택 삭제
          </span>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CartMainTitle;
