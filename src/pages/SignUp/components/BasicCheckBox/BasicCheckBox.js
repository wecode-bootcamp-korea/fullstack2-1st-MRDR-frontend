import React from 'react';
import { booleanToNumber } from '../../../../util';

class BasicCheckBox extends React.Component {
  render() {
    const {
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
    } = this.props;
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
        <input
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
