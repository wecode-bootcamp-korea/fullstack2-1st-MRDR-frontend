import React from 'react';
import CheckBox from '../CheckBox/CheckBox';

class CheckBoxRow extends React.Component {
  render() {
    return (
      <div className="CheckBoxRow">
        <CheckBox {...this.props} />
      </div>
    );
  }
}

export default React.memo(CheckBoxRow);
