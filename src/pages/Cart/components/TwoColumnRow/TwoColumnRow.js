import React from 'react';
import './TwoColumnRow.scss';

class TwoColumnRow extends React.Component {
  render() {
    const {
      props: { className, description, price },
    } = this;
    return (
      <div className={`${className ? className : ''} TwoColumnRow`}>
        <span>{description}</span>
        <span>{price}</span>
      </div>
    );
  }
}

export default TwoColumnRow;
