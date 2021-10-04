import React from 'react';
import ArgeePolicyDoc from '../ArgeePolicyDoc/ArgeePolicyDoc';
import CheckBoxRow from '../CheckBoxRow/CheckBoxRow';
import './AgreePolicyTable.scss';

class AgreePolicyTable extends React.Component {
  state = { useInfoAgree: false, personalInfoAgree: false, emailAgree: false };

  openModal = e => {
    const {
      target: {
        classList: { value },
      },
    } = e;
    const { state } = this;
    this.setState(() => ({ [value]: !state[value] }));
  };

  render() {
    const {
      openModal,
      state: { useInfoAgree, personalInfoAgree, emailAgree },
    } = this;
    return (
      <div className="AgreePolicyTable">
        <table>
          <thead>
            <tr className="signUpSubTitle">
              <td>
                <h1>전체동의</h1>
              </td>
            </tr>
            <tr className="subSignUpSubTitle">
              <td>
                <CheckBoxRow
                  id="allAgreeBox"
                  label="  이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신 선택에 모두
                    동의합니다."
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow id="useInfoAgree" label={'[필수] 이용약관 동의'} />
              </td>
              <td className="plusColumn">
                <span className="useInfoAgree" onClick={openModal}>
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={useInfoAgree ? 'show' : ''} />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  id="personalInfoAgree"
                  label={'[필수] 개인정보 수집 및 이용 동의'}
                />
              </td>
              <td className="plusColumn">
                <span className="personalInfoAgree" onClick={openModal}>
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={personalInfoAgree ? 'show' : ''} />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <div className="flexRow">
                  <CheckBoxRow
                    id="SMSAgree"
                    label={'[선택] SMS 수신을 동의하십니까?'}
                  />

                  <CheckBoxRow
                    id="emailAgree"
                    label={'[필수] 이메일 수신을 동의하십니까?'}
                  />
                </div>
              </td>
              <td className="plusColumn">
                <span className="emailAgree" onClick={openModal}>
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={emailAgree ? 'show' : ''} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AgreePolicyTable;
