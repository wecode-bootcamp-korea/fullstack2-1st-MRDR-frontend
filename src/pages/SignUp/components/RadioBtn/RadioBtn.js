import React from 'react';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import './RadioBtn.scss';

class RadioBtn extends React.Component {
  render() {
    const { id, value, name, onClick, label } = this.props;

    return (
      <BasicCheckBox
        type={'radio'}
        className={'RadioBtn'}
        id={id}
        value={value}
        name={name}
        label={label}
        onClick={() => onClick(name, id)}
      />
    );
  }
}

export default React.memo(RadioBtn);
