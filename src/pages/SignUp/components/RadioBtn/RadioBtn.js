import React from 'react';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import './RadioBtn.scss';

class RadioBtn extends React.Component {
  render() {
    const { props } = this;
    return <BasicCheckBox type={'radio'} className={'RadioBtn'} {...props} />;
  }
}

export default RadioBtn;
