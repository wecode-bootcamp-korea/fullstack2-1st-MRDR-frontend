import React from 'react';
import Button from '../../../components/Button/Button';

class AdressTableRow extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <tr className="adressTr">
        <td>주소</td>
        <td className="daressTd" colSpan="2">
          <div className="innerRow innerRowColumn">
            <input
              onChange={onChange}
              className="input"
              name="userMiddleAdress"
            />
            <Button content={'우편번호'} className="adressNumber" />
          </div>
          <input
            onChange={onChange}
            name="userSecondAdress"
            className="input innerRowColumn"
            placeholder="기본주소"
          />
          <input onChange={onChange} className="input" name="userthirdAdress" />
        </td>
        <td></td>
      </tr>
    );
  }
}

export default AdressTableRow;
