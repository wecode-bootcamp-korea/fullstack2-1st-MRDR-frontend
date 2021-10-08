import React from 'react';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import './RadioBtn.scss';

class RadioBtn extends React.Component {
  render() {
    return (
      <BasicCheckBox type={'radio'} className={'RadioBtn'} {...this.props} />
    );
  }
}

export default RadioBtn;
