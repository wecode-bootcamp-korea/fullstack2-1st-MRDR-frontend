import React from 'react';

class Button extends React.Component {
  render() {
    const {
      props: { className, content, message },
    } = this;

    return (
      <button className={className}>
        {content ? content : null} {message}
      </button>
    );
  }
}

export default Button;
