import React from 'react';
import { Link } from 'react-router-dom';
import CheckBoxRow from '../CheckBoxRow/CheckBoxRow';
import Input from '../Input/Input';
import './AgreePolicy.scss';

class AgreePolicy extends React.Component {
  render() {
    return (
      <div className="AgreePolicy">
        <table>
          <thead>
            <tr className="signUpSubTitle">
              <td>
                <h1>전체동의</h1>
              </td>
            </tr>
            <tr className="subSignUpSubTitle">
              <td>
                <Input
                  type="checkbox"
                  id="agreeBox"
                  name="agreeBox"
                  value="allAgree"
                />
                <label htmlFor="agreeBox">
                  이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택에 모두
                  동의합니다.
                </label>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  id="personalAgree"
                  name="personalAgree"
                  label={'[필수] 이용약관 동의'}
                />
              </td>
              <td className="plusColumn">
                <Link to="#">+</Link>
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <CheckBoxRow
                  id="personalAgree"
                  name="personalAgree"
                  label={'[필수] 개인정보 수집 및 이용 동의'}
                />
              </td>
              <td className="plusColumn">
                <Link to="#">+</Link>
              </td>
            </tr>
            <tr className="subArgeeColumn">
              <td colSpan="2">
                <div className="flexRow">
                  <CheckBoxRow
                    id="personalAgree"
                    name="personalAgree"
                    label={'[선택] SMS 수신을 동의하십니까?'}
                  />

                  <CheckBoxRow
                    id="personalAgree"
                    name="personalAgree"
                    label={'[필수] 이메일 수신을 동의하십니까?'}
                  />
                </div>
              </td>
              <td className="plusColumn">
                <Link to="#">+</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AgreePolicy;
