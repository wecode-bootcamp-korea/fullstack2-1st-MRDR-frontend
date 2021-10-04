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
        tableTypeChanger,
        tableType,
      },
    } = this;
    return (
      <div className={className}>
        <Input
          readOnly={true}
          // checked={tableType === Number(value)}
          name={name || id}
          type={type}
          id={id}
          value={value || id}
          onChange={tableTypeChanger}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default BasicCheckBox;
