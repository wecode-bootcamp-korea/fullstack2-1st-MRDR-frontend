import React from 'react';
import Title from '../../../components/Title/Title';
import CheckBoxRow from '../components/CheckBoxRow/CheckBoxRow';
import ArgeePolicyDoc from '../signModals/ArgeePolicyDoc/ArgeePolicyDoc';
import './AgreePolicyTable.scss';

class AgreePolicyTable extends React.Component {
  render() {
    const {
      checkBoxController,
      openModal,
      allAgreeBox,
      useInfoAgree,
      personalInfoAgree,
      emailAgree,
      SNSAgree,
      emailAgreeBoxBtn,
      useInfoAgreeBtn,
      personalInfoAgreeBtn,
    } = this.props;
    return (
      <div className="AgreePolicyTable">
        <table>
          <thead>
            <tr className="signUpSubTitle">
              <td>
                <Title title="전체동의" />
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="subSignUpSubTitle">
              <td colSpan="3">
                <CheckBoxRow
                  onClick={() => checkBoxController('allAgreeBox')}
                  ischecked={allAgreeBox}
                  id="allAgreeBox"
                  label="  이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신 선택에 모두
                    동의합니다."
                />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  id="useInfoAgree"
                  onClick={() => checkBoxController('useInfoAgree')}
                  ischecked={useInfoAgree || false}
                  label={'[필수] 이용약관 동의'}
                />
              </td>
              <td className="plusColumn">
                <span
                  id="useInfoAgreeBtn"
                  onClick={() => openModal('useInfoAgreeBtn')}
                >
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={useInfoAgreeBtn ? 'show' : ''} />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  onClick={() => checkBoxController('personalInfoAgree')}
                  ischecked={personalInfoAgree || false}
                  id="personalInfoAgree"
                  label={'[필수] 개인정보 수집 및 이용 동의'}
                />
              </td>
              <td className="plusColumn">
                <span
                  id="personalInfoAgreeBtn"
                  onClick={() => openModal('personalInfoAgreeBtn')}
                >
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc
                  className={personalInfoAgreeBtn ? 'show' : ''}
                />
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <div className="flexRow">
                  <CheckBoxRow
                    onClick={() => checkBoxController('SNSAgree')}
                    ischecked={SNSAgree || false}
                    id={'SNSAgree'}
                    label={'[선택] SMS 수신을 동의하십니까?'}
                  />

                  <CheckBoxRow
                    onClick={() => checkBoxController('emailAgree')}
                    ischecked={emailAgree}
                    id={'emailAgree'}
                    label={'[선택] 이메일 수신을 동의하십니까?'}
                  />
                </div>
              </td>
              <td className="plusColumn">
                <span
                  id="emailAgreeBoxBtn"
                  onClick={() => openModal('emailAgreeBoxBtn')}
                >
                  +
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="docRow">
                <ArgeePolicyDoc className={emailAgreeBoxBtn ? 'show' : ''} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AgreePolicyTable;
