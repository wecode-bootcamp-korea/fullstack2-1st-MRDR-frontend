import React from 'react';
import BasicCheckBox from '../components/BasicCheckBox/BasicCheckBox';
import './CartMainTitle.scss';

class CartMainTitle extends React.Component {
  render() {
    return (
      <div className="mainTitleWrapper">
        <div className="mainTitle">
          <BasicCheckBox
            {...this.props}
            className="CheckBox"
            id="checkAllItem"
            label="전체선택(0/2)"
          />
          <span className="deleteAllCart">선택 삭제</span>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CartMainTitle;
