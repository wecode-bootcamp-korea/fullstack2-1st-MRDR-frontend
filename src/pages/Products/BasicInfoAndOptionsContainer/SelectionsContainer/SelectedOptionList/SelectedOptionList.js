import React, { Component } from 'react';
import SelectedOption from '../SelectedOption/SelectedOption';
import './SelectedOptionList.scss';

class SelectedOptionList extends Component {
  render() {
    const { selectedList, handleSelectedList } = this.props;

    return (
      <ul className="SelectedOptionList">
        {selectedList.map(option => {
          return <SelectedOption handleSelectedList={handleSelectedList} />;
        })}
      </ul>
    );
  }
}

export default SelectedOptionList;
