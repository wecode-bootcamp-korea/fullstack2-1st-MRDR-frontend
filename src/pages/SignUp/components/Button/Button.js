import React from 'react';

class Button extends React.Component {
  render() {
    const {
      props: { onClick, className, content, message },
    } = this;

    return (
      <button className={className} onClick={onClick}>
        {content ? content : null} {message}
      </button>
    );
  }
}

export default Button;
