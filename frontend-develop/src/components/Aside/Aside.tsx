import * as S from './Aside.styles';

function Aside() {
  return (
    <S.AsideWrapper>
      <S.UserSideBar>
        <S.UserSideBarText>맞춤 솔루션을 받아보세요!</S.UserSideBarText>
        <S.LoginButton type='button'>로그인</S.LoginButton>
        <S.AccountOptions>
          <li>
            <S.OptionsButton>아이디 찾기</S.OptionsButton>
          </li>
          <li>
            <S.Solid />
          </li>
          <li>
            <S.OptionsButton>회원가입</S.OptionsButton>
          </li>
        </S.AccountOptions>
      </S.UserSideBar>

      <S.ContentsSideBar>홍보문구</S.ContentsSideBar>
    </S.AsideWrapper>
  );
}

export default Aside;
