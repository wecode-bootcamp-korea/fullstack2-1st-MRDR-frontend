import React from 'react';
import Input from '../Input/Input';
import './AdditionalInfoTable.scss';

class AdditionalInfoTable extends React.Component {
  render() {
    const {
      props: { onChange },
    } = this;
    return (
      <div className="AdditionalInfoTable">
        <table>
          <thead>
            <tr className="signUpSubTitle">
              <td colSpan="2">
                <h1>추가정보</h1>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="subAdditionalInfo">
              <td colSpan="2">생년월일</td>
              <td>
                <div className="innerRow">
                  <Input
                    onChange={onChange}
                    name="userBirthYear"
                    className="input userBirthYearInput"
                  />
                  &nbsp;년&nbsp;
                  <Input
                    onChange={onChange}
                    name="userBirthMonth"
                    className="input userBirthMonthInput"
                  />
                  &nbsp;월&nbsp;
                  <Input
                    onChange={onChange}
                    name="userBirthDate"
                    className="input userBirthDateInput"
                  />
                  &nbsp;일&nbsp;
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdditionalInfoTable;
