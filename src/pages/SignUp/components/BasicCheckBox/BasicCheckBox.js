import React from 'react';
import Input from '../Input/Input';

class BasicCheckBox extends React.Component {
  render() {
    const {
      props: {
        className,
        type,
        label,
        id,
        value,
        name,
        onClick,
        tableType,
        isChecked,
      },
    } = this;
    return (
      <div className={className}>
        <Input
          readOnly={true}
          checked={type === 'radio' ? tableType === Number(value) : isChecked}
          name={name || id}
          type={type}
          id={id}
          value={value || id}
          onChange={onClick}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default BasicCheckBox;
