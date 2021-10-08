import React from 'react';
import './BasicCheckBox.scss';

class BasicCheckBox extends React.Component {
  render() {
    const { onClick, className, label, id, isChecked } = this.props;

    return (
      <div className={className || id}>
        <input
          readOnly={true}
          onClick={onClick}
          type="checkBox"
          checked={isChecked}
          id={id}
          value={id}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default BasicCheckBox;
