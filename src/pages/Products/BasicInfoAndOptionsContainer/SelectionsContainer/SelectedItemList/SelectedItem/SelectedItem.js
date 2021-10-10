import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './SelectedItem.scss';

class SelectedItem extends Component {
  render() {
    const { id, name, price, color, size, amount, deleteSelectedItem } =
      this.props;

    return (
      <div className="SelectedItem">
        <div className="productName">{name}</div>
        <div className="colorAndSize">
          {color} / {size}
        </div>
        <div className="bottomLine">
          <div className="amountWrapper">
            <button>-</button>
            <div className="amount">{amount}</div>
            <button>+</button>
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
