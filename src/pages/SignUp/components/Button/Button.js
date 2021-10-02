import React from 'react';

class Button extends React.Component {
  render() {
    const {
      props: { className, content, message },
    } = this;

    return (
      <div className={className}>
        {content ? content : ''} {message}
      </div>
    );
  }
}

export default Button;
