import React, { Component } from 'react';
import SelectedItem from './SelectedItem/SelectedItem';
import './SelectedItemList.scss';

class SelectedItemList extends Component {
  render() {
    const { name, price, selectedList, deleteSelectedItem } = this.props;

    return (
      <ul className="SelectedItemList">
        {selectedList.map(selectedItem => {
          const { id, color, size, amount } = selectedItem;
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
            />
          );
        })}
      </ul>
    );
  }
}

export default SelectedItemList;
