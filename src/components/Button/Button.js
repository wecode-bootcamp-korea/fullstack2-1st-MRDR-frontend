import React from 'react';

class Button extends React.Component {
  render() {
    const { className, content, message } = this.props;

    return (
      <button className={className}>
        {content || ''} {message}
      </button>
    );
  }
}

export default Button;
