import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './SelectedItem.scss';

class SelectedItem extends Component {
  render() {
    const {
      id,
      name,
      price,
      color,
      size,
      amount,
      deleteSelectedItem,
      handleAmount,
    } = this.props;

    return (
      <div className="SelectedItem">
        <div className="productTitle">{name}</div>
        <div className="colorAndSize">
          {color} / {size}
        </div>
        <div className="bottomLine">
          <div className="amountWrapper">
            <button onClick={() => handleAmount(id, 'decrement')}>-</button>
            <div className="amount">{amount}</div>
            <button onClick={() => handleAmount(id, 'increment')}>+</button>
          </div>
          <span className="price">
            {(price * amount).toLocaleString() + '원'}
          </span>
        </div>
        <FontAwesomeIcon
          className="deleteButton"
          icon={faTimes}
          size="lg"
          onClick={() => deleteSelectedItem(id)}
        />
      </div>
    );
  }
}

export default SelectedItem;
