import React from 'react';

class TableRows extends React.Component {
  render() {
    const { placeholder, td, className, name, onChange, require } = this.props;

    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2">
          <input
            required={require}
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
