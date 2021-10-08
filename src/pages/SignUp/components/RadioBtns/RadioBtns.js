import React from 'react';
import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioBtns.scss';

class RadioBtns extends React.Component {
  render() {
    const { btns } = this.props;
    return (
      <div className="RadioBtns">
        {btns.map(btn => {
          return <RadioBtn key={btn.id} {...btn} {...this.props} />;
        })}
      </div>
    );
  }
}

export default React.memo(RadioBtns);
