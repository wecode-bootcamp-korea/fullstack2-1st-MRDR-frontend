import React from 'react';
import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioBtns.scss';

class RadioBtns extends React.Component {
  render() {
    const { props } = this;

    return (
      <div className="RadioBtns">
        {props.btns.map(btn => {
          return <RadioBtn key={btn.id} {...btn} {...props} />;
        })}
      </div>
    );
  }
}

export default RadioBtns;
