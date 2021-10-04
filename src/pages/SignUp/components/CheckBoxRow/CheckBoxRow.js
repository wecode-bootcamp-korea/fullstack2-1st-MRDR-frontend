import React from 'react';
import CheckBox from '../CheckBox/CheckBox';

class CheckBoxRow extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="CheckBoxRow">
        <CheckBox {...props} />
      </div>
    );
  }
}

export default CheckBoxRow;
