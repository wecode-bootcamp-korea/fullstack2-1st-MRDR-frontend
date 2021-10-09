import React from 'react';

class BasicCheckBox extends React.Component {
  render() {
    const { onClick, ischecked, className, label, id, value, type, name } =
      this.props;
    return (
      <div className={className}>
        <input
          checked={ischecked}
          name={name}
          value={value}
          onClick={onClick}
          type={type}
          readOnly={true}
          id={id}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default BasicCheckBox;
