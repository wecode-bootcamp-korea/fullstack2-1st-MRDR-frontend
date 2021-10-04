import React from 'react';
import { booleanToNumber } from '../../../../util';
import Input from '../Input/Input';

class BasicCheckBox extends React.Component {
  render() {
    const {
      props: {
        onClick,
        className,
        label,
        id,
        usertype,
        value,
        ischecked,
        type,
        name,
        userBusiness,
      },
    } = this;
    let checked;

    switch (type) {
      case 'radio':
        if (name === 'usertype') {
          checked = booleanToNumber(usertype === value);
        } else {
          checked = booleanToNumber(userBusiness === value);
        }
        break;

      case 'checkBox':
        checked = booleanToNumber(ischecked);
        break;

      default:
        break;
    }

    return (
      <div className={className}>
        <Input
          name={name}
          value={value}
          onClick={onClick}
          type={type}
          readOnly={true}
          checked={checked}
          id={id}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default BasicCheckBox;
