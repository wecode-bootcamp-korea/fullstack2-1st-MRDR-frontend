import React from 'react';
import { joinPageComponentsSwitcher } from '../../util';
import AdditionalInfoTable from './components/AdditionalInfoTable/AdditionalInfoTable';
import AgreePolicyTable from './components/AgreePolicyTable/AgreePolicyTable';
import './SignUp.scss';

class SignUp extends React.Component {
  state = { tableType: 0 };

  tableTypeChanger = e => {
    const {
      target: { value },
    } = e;
    this.setState(() => ({ tableType: Number(value) }));
  };

  render() {
    const {
      tableTypeChanger,
      state: { tableType },
    } = this;

    return (
      <div className="SignUp">
        <div className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>
          {joinPageComponentsSwitcher[tableType]({ tableTypeChanger })}
          <AdditionalInfoTable />
          <AgreePolicyTable />
        </div>
      </div>
    );
  }
}

export default SignUp;
