import React from 'react';

class Input extends React.Component {
  render() {
    const { props } = this;
    return <input {...props} />;
  }
}

export default Input;
