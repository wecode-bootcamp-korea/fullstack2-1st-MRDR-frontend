import React from 'react';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import './CheckBox.scss';

class CheckBox extends React.Component {
  render() {
    const { props } = this;
    return (
      <BasicCheckBox type={'checkBox'} className={'CheckBox'} {...props} />
    );
  }
}

export default CheckBox;
