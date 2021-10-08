import React from 'react';

class TableRows extends React.Component {
  render() {
    const { placeholder, td, className, name, onChange } = this.props;
    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2">
          <input
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            className="input"
          />
        </td>
      </tr>
    );
  }
}

export default TableRows;
