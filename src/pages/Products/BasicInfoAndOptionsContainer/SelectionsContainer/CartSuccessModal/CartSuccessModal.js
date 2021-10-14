import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './CartSuccessModal.scss';

class CartSuccessModal extends Component {
  goToCartPage = () => {
    this.props.history.push('/cart');
  };

  render() {
    const { toggleCartSuccessVisibility } = this.props;

    return (
      <div className="CartSuccessModal">
        <div className="topMessage">
          상품이 장바구니에 정상적으로 담겨졌습니다.
        </div>
        <div className="bottomButtons">
          <button className="cartButton" onClick={this.goToCartPage}>
            장바구니로 이동
          </button>
          <button
            className="continueButton"
            onClick={toggleCartSuccessVisibility}
          >
            쇼핑 계속하기
          </button>
        </div>
        <FontAwesomeIcon
          className="closeButton"
          icon={faTimes}
          onClick={toggleCartSuccessVisibility}
        />
      </div>
    );
  }
}

export default withRouter(CartSuccessModal);
