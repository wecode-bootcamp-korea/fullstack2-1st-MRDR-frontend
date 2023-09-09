import styled from '@emotion/styled';

export const FindIDContainer = styled.div`
  padding: 181px 0;
  background-color: #fd805d;
`;

export const FindIDWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: white;
  max-width: 1039px;
  box-shadow: 0px 17px 33px #e34a13;
  border-radius: 60px;
  padding: 36px;
  gap: 34px;
`;

export const AdvertiseBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #fddac9;
  width: 540px;
  height: 568px;
  border-radius: 30px;
`;

export const FindIDBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharactorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 55px;
  background-color: lightgray;
  font-weight: bold;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 22px;
  height: 81px;
  color: #fd6b36;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const FindIDTitle = styled.div`
  border-radius: 29px;
  background-color: #ffe7de;
  color: #fd6b36;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 40px;
  margin-bottom: 34px;
`;

export const nameTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

export const nameInput = styled.input`
  width: 100%;
  border-radius: 14px;
  background: #f0f0f0 0% 0% no-repeat padding-box;
  padding: 8px 14px;
  margin-bottom: 12px;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid #fd6b36;
  }
`;

export const validateInfo = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #fd6b36;
  padding: 0 0 23px 0;
`;

export const phoneAuthTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const phoneAuthBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 10px;
`;

export const phoneAuthInput = styled.input`
  width: 324px;
  height: 35px;
  background-color: #f0f0f0;
  border-radius: 14px;
  padding: 8px 14px;
  border: 2px solid #f0f0f0;

  &:focus {
    border: 2px solid #fd6b36;
  }
`;

export const phoneAuthSendBtn = styled.button`
  width: 127px;
  height: 35px;
  background-color: #625d5a;
  color: white;
  border-radius: 14px;
  cursor: pointer;
`;

export const timeCount = styled.p`
  width: 100%;
  font-size: 14px;
  color: #fd6b36;
  margin-bottom: 32px;
`;

export const confirmBtn = styled.button`
  width: 100%;
  height: 51px;
  background-color: #e7e6e5;
  color: white;
  border-radius: 14px;
  cursor: pointer;
`;
