import styled from '@emotion/styled';

export const AsideWrapper = styled.aside`
  width: 100%;
`;

export const UserSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  padding: 23px 18px;
  background-color: #ffe7de;
  border-radius: 14px;
`;

export const UserSideBarText = styled.p`
  font-size: 19px;
`;

export const LoginButton = styled.button`
  margin: 10px 0 15px;
  padding: 12px 148px;
  color: #fff;
  background-color: #fd6b36;
  border-radius: 14px;
  font-size: 22px;
  white-space: nowrap;
  cursor: pointer;
`;

export const AccountOptions = styled.ul`
  display: grid;
  grid-template-columns: 1fr 0fr 1fr;
  place-items: center;
  > li:last-of-type {
    width: 100%;
    justify-items: left;
  }
`;

export const OptionsButton = styled.button`
  color: #fd6b36;
  background-color: transparent;
  cursor: pointer;
`;

export const Solid = styled.i`
  border-right: 1px solid rgba(253, 107, 54, 0.22);
  height: 100%;
  margin: 0 18.5px;
`;

export const ContentsSideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 570px;
  padding: 23px 18px;
  background-color: #ffe7de;
  border-radius: 14px;
`;
