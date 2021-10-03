import React from 'react';
import Input from '../Input/Input';
import './RadioBtn.scss';

class RadioBtn extends React.Component {
  render() {
    const {
      props: { label, id, value, name },
    } = this;
    return (
      <div className="RadioBtn">
        <Input readOnly={true} name={name} type="radio" id={id} value={value} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default RadioBtn;
