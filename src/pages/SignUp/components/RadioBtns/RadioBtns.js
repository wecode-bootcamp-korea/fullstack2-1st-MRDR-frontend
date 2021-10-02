import React from 'react';
import Input from '../Input/Input';
import './RadioBtns.scss';

class RadioBtns extends React.Component {
  render() {
    const {
      props: { btns },
    } = this;

    return (
      <div className="RadioBtns">
        {btns.map(btn => {
          const { id, value, label } = btn;
          return (
            <React.Fragment key={id}>
              <Input
                className="radioBtn"
                type={'radio'}
                id={id}
                for={id}
                value={value}
              />
              <label for={id}>{label}</label>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default RadioBtns;
