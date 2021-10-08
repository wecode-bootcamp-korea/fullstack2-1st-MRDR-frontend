import React from 'react';
import Title from '../../Cart/components/Title/Title';
import './AdditionalInfoTable.scss';

class AdditionalInfoTable extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="AdditionalInfoTable">
        <table>
          <thead>
            <tr className="signUpSubTitle">
              <td colSpan="2">
                <Title title="추가정보" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="subAdditionalInfo">
              <td colSpan="2">생년월일</td>
              <td>
                <div className="innerRow">
                  <input
                    onChange={onChange}
                    name="userBirthYear"
                    className="input userBirthYearInput"
                  />
                  &nbsp;년&nbsp;
                  <input
                    onChange={onChange}
                    name="userBirthMonth"
                    className="input userBirthMonthInput"
                  />
                  &nbsp;월&nbsp;
                  <input
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
