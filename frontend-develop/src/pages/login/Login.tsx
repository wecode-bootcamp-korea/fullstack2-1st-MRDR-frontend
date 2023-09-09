import { Link } from 'react-router-dom';

import * as S from './login.styles';

function Login() {
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.AdvertiseBox>
          <span style={{ margin: 'auto', fontWeight: 'bold' }}>홍보문구</span>
        </S.AdvertiseBox>
        <S.LoginBox>
          <S.CharactorBox>캐릭터</S.CharactorBox>
          <S.Logo>ALL IN JOB</S.Logo>
          <p
            style={{
              margin: 'auto',
              fontWeight: 'bold',
              paddingBottom: '10px',
              color: '#625D5A',
            }}
          >
            소셜 로그인
          </p>
          <S.SocialLoginBox>
            <S.SocialLoginImg src='/src/pages/login/res/img/kakao.png' alt='kakao' />
            <S.SocialLoginImg src='/src/pages/login/res/img/google.png' alt='google' />
          </S.SocialLoginBox>
          <S.AccountActionsBox>
            <Link to='/find-id'>아이디 찾기</Link>
            <span style={{ color: '#AEAAA6' }}>|</span>
            <Link to='/signup'>회원가입</Link>
          </S.AccountActionsBox>
        </S.LoginBox>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
}

export default Login;
