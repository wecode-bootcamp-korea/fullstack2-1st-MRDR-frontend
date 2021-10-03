import {
  faAddressCard,
  faAppleAlt,
  faComment,
  faPenNib,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { checkEmailValid, checkPasswordValid } from '../../utils';
import Border from './components/Border/Border';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './Login.scss';

class Login extends React.Component {
  state = { email: '', password: '' };

  onChange = e => {
    const {
      target: { name, value },
    } = e;
    this.setState(() => ({ [name]: value }));
  };

  onSubmit = e => {
    const {
      state: { email, password },
    } = this;
    e.preventDefault();
    const isValid = this.checkIsValid(email, password);
    if (!isValid) return alert('잘못된 이메일이나 비밀번호가 입력 되었습니다.');
  };

  checkIsValid = (email, password) => {
    return checkEmailValid(email) && checkPasswordValid(password);
  };

  render() {
    return (
      <div className="Login">
        <div className="loginWrapper">
          <h1 className="loginTitle title">로그인</h1>
          <ul className="loginMessages">
            <li>
              <span className="loginRed">카카오 간편 회원가입을</span> 하면
            </li>
            <li>
              <span className="loginRed">3000원 할인쿠폰</span>즉시 지급!
            </li>
            <li>*플친 쿠폰은 ID당 1회 즉시 지급!</li>
          </ul>
          <Button
            className={'kakaoLoginBtn'}
            content={<FontAwesomeIcon icon={faComment} />}
            message={'카카오 회원가입/로그인'}
          />
          <Border />
          <form onSubmit={this.onSubmit}>
            <Input
              name="email"
              placeholder="아이디"
              className="loginInput"
              onChange={this.onChange}
            />
            <Input
              name="password"
              placeholder="비밀번호"
              className="loginInput"
              type="password"
              onChange={this.onChange}
            />
            <div className="loginSecurity">
              <FontAwesomeIcon icon={faUnlockAlt} />
              <span>보안접속</span>
            </div>
            <Button content="로그인" className={'loginButton'} />
          </form>
          <ul className="loginLinks">
            <li>
              <Link to="/"> 아이디 찾기</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/"> 비밀번호 찾기</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/"> 비회원주문조회</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/"> 강사회원 신청</Link>
            </li>
          </ul>
          <div className="loginButtons">
            <button>
              <FontAwesomeIcon className="loginNaver icon" icon={faPenNib} />
              <span> 네이버 로그인</span>
            </button>
            <button>
              <FontAwesomeIcon className="loginApple icon" icon={faAppleAlt} />
              <span>애플 로그인</span>
            </button>
          </div>
          <Border />
          <Button content="회원가입 후 혜택받기" className={'loginSubBtn'} />
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
