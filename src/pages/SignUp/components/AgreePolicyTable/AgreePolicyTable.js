import React from 'react';
import { policyAgreements } from '../../../../util';
import ArgeePolicyDoc from '../ArgeePolicyDoc/ArgeePolicyDoc';
import CheckBoxRow from '../CheckBoxRow/CheckBoxRow';
import './AgreePolicyTable.scss';

class AgreePolicyTable extends React.Component {
  state = {
    allAgreeBox: ['', false],
    useInfoAgree: ['', false],
    personalInfoAgree: ['', false],
    emailAgree: ['', false],
    SNSAgree: ['', false],
  };

  openModal = e => {
    const {
      target: {
        classList: { value },
      },
    } = e;
    const { state } = this;
    this.setState(() => ({ [value]: [!state[value][0], state[value][1]] }));
  };

  checkBoxController = e => {
    const {
      target: { id },
    } = e;

    const { state } = this;
    if (id === 'allAgreeBox') {
      const temp = {};
      for (let key in policyAgreements) {
        const item = policyAgreements[key];
        temp[item] = [state[item][0], !state[item][1]];
      }
      this.setState(() => ({ ...temp }));
      return;
    }
    this.setState(() => ({ [id]: [state[id][0], !state[id][1]] }));
  };

  render() {
    const {
      checkBoxController,
      openModal,
      state: {
        allAgreeBox,
        useInfoAgree,
        personalInfoAgree,
        emailAgree,
        SNSAgree,
      },
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
                  onClick={checkBoxController}
                  ischecked={allAgreeBox[1]}
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
                <CheckBoxRow
                  id="useInfoAgree"
                  onClick={checkBoxController}
                  ischecked={useInfoAgree[1]}
                  label={'[필수] 이용약관 동의'}
                />
              </td>
              <td className="plusColumn">
                <span className="useInfoAgree" onClick={openModal}>
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={useInfoAgree[0] ? 'show' : ''} />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  onClick={checkBoxController}
                  ischecked={personalInfoAgree[1]}
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
                <ArgeePolicyDoc
                  className={personalInfoAgree[0] ? 'show' : ''}
                />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <div className="flexRow">
                  <CheckBoxRow
                    onClick={checkBoxController}
                    ischecked={SNSAgree[1]}
                    id={'SNSAgree'}
                    label={'[선택] SMS 수신을 동의하십니까?'}
                  />

                  <CheckBoxRow
                    onClick={checkBoxController}
                    ischecked={emailAgree[1]}
                    id={'emailAgree'}
                    label={'[선택] 이메일 수신을 동의하십니까?'}
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
                <ArgeePolicyDoc className={emailAgree[0] ? 'show' : ''} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AgreePolicyTable;
