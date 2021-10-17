import React from 'react';

class TableRows extends React.Component {
  render() {
    const {
      content,
      type,
      placeholder,
      td,
      className,
      name,
      onChange,
      require,
    } = this.props;

    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2">
          <input
            type={type || 'text'}
            required={require}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className="input"
          />
          {content}
        </td>
      </tr>
    );
  }
}

export default TableRows;
