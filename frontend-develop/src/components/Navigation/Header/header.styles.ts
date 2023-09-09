import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 1002;
  background-color: white;
  padding: 0 20px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1002;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const MainWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  //padding: 20px 60px;
  height: 81px;
  color: #fd6b36;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 350px;
  height: 59px;
`;

export const HeaderCharacter = styled.div`
  padding: 20px 25px;
`;

export const MenuItem = styled.li`
  display: flex;
  flex: none;
  align-items: center;
  width: 125px;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const CharactorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 67px;
  border: 1px solid #707070;
  background-color: lightgray;
`;

export const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  font-weight: bold;
`;

export const HoverMenu = styled.div`
  position: fixed;
  top: 81px;
  left: 0;
  width: 100vw;
  height: 250px;
  background-color: white;
  z-index: 1001;
`;

export const MenuDetailContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  padding-bottom: 40px;
`;

export const MenuDetailWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 80px;
  //border: 1px red solid;
`;

export const divisionLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #f0f0f0;
  margin-bottom: 30px;
`;

export const MenuWrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 81px;
  //border: 1px red solid;
`;

export const Box = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
`;
