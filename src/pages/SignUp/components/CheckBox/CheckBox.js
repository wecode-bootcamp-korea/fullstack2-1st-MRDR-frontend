import React from 'react';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import './CheckBox.scss';

class CheckBox extends React.Component {
  render() {
    return (
      <BasicCheckBox type={'checkBox'} className={'CheckBox'} {...this.props} />
    );
  }
}

export default React.memo(CheckBox);
