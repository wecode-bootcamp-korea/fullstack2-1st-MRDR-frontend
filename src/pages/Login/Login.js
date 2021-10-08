import React from 'react';
import { faAddressCard, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button/Button';
import { checkIdValid, checkPasswordValid } from '../../util/auth';
import './Login.scss';
import Title from '../../components/Title/Title';

class Login extends React.Component {
  state = { id: '', password: '' };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { id, password } = this.state;
    const isValid = this.checkIsValid(id, password);
    if (!isValid) return alert('잘못된 이메일이나 비밀번호가 입력 되었습니다.');
  };

  checkIsValid = (id, password) => {
    return checkIdValid(id) && checkPasswordValid(password);
  };

  render() {
    return (
      <div className="Login">
        <div className="loginWrapper">
          <Title className="loginTitle title" title="로그인" />
          <form onSubmit={this.onSubmit}>
            <input
              name="id"
              placeholder="아이디, 영소문자와 숫자의 조합 4~12자"
              className="loginInput"
              onChange={this.onChange}
            />
            <input
              name="password"
              placeholder="비밀번호, 영대소문자,숫자, 특수문자 조합 8~16자"
              className="loginInput"
              type="password"
              onChange={this.onChange}
            />
            <Button content="로그인" className={'loginButton'} />
          </form>
          <div className="smallMsgs">
            <small>
              <FontAwesomeIcon className="icon" icon={faAddressCard} />꼭 확인
              해 주세요!
            </small>
            <div className="msgContainer">
              <FontAwesomeIcon className="icon" icon={faPenNib} />
              <small className="longSmallMsg">
                카카오실크로 연동된 카아오 간편 로그인을 제외한 나머지 간편
                로그인은 기존 안다르 온라인 스토어 아이디와 별도이며 주문,
                적립금, 회원정보가 개별 관리됩니다.
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
