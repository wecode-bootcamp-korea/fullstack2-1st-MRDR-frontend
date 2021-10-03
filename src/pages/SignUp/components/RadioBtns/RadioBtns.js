import React from 'react';
import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioBtns.scss';

class RadioBtns extends React.Component {
  render() {
    const {
      props: { btns, name },
    } = this;

    return (
      <form className="RadioBtns">
        {btns.map(btn => {
          const { id, label, value } = btn;
          return (
            <RadioBtn
              key={id}
              name={name}
              label={label}
              id={id}
              value={value}
            />
          );
        })}
      </form>
    );
  }
}

export default RadioBtns;
