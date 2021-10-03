import React from 'react';
import Input from '../Input/Input';
import './CheckBoxRow.scss';

class CheckBoxRow extends React.Component {
  render() {
    const {
      props: { label, id, name },
    } = this;
    return (
      <div className="CheckBoxRow">
        <Input type="checkBox" id={id} name={name} reaonly={true} />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}

export default CheckBoxRow;
