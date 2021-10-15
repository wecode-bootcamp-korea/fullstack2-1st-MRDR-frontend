import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    const { message, className } = this.props;

    return (
      <div className={className || 'ErrorMessage'}>
        <small className={'message'}>{message}</small>
      </div>
    );
  }
}

export default ErrorMessage;
