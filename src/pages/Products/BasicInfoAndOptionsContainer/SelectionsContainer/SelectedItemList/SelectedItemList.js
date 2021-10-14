import React, { Component } from 'react';
import SelectedItem from './SelectedItem/SelectedItem';
import './SelectedItemList.scss';

class SelectedItemList extends Component {
  render() {
    const { name, price, selectedList, deleteSelectedItem, handleAmount } =
      this.props;

    return (
      <ul className="SelectedItemList">
        {selectedList.map(item => {
          const { id, color, size, amount } = item;
          return (
            <SelectedItem
              key={id}
              id={id}
              name={name}
              price={price}
              color={color}
              size={size}
              amount={amount}
              deleteSelectedItem={deleteSelectedItem}
              handleAmount={handleAmount}
            />
          );
        })}
      </ul>
    );
  }
}

export default SelectedItemList;
