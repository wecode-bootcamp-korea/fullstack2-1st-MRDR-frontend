import styled from '@emotion/styled';

type ChangeColorProps = {
  isChangeColor: boolean;
};

export const InterestFieldSetupWrapper = styled.div`
  width: 539px;
  margin: 0 auto;
  padding: 40px 36px;
  background-color: #fff;
  box-shadow: 0px 17px 33px #e34a13;
  border-radius: 60px;
  color: black;
`;

export const InterestFieldSetupTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;

  strong {
    color: #fd6b36;
  }
`;

export const MajorDepartment = styled.div`
  position: relative;

  input {
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 14px;
    padding: 8px 14px;
    margin-top: 16px;

    ::placeholder {
      color: #aeaaa6;
    }
  }
`;

export const MajorDepartmentList = styled.ul`
  position: absolute;
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  background-color: #fff;
  overflow: scroll;

  li {
    cursor: pointer;

    :hover {
      background-color: #eee;
    }
  }
`;

export const InterestSelect = styled.div`
  padding-top: 45px;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 19px;
  gap: 14px 12px;
`;

export const ClickedTag = styled.li<ChangeColorProps>`
  display: flex;
  align-items: center;
  padding: 3px 15px;
  background-color: ${props => (props.isChangeColor ? '#fd6b36' : '#ffe7de')};
  color: ${props => (props.isChangeColor ? '#fff' : '#fd6b36')};
  border-radius: 14px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #fd6b36;
  }
`;

export const TagName = styled.h3`
  margin-right: 7px;
`;

export const TagIcon = styled.img`
  width: 13px;
  height: 13px;
`;

export const TagImage = styled.img`
  width: 100%;
  height: 228px;
  margin: 20px 0;
`;

export const InterestKeyWord = styled.div`
  padding: 54px 0 45px;
`;

export const KeyWordText = styled.p`
  padding-top: 7px;
  color: #aeaaa6;
  font-size: 14px;
`;

export const CheckBox = styled.div<ChangeColorProps>`
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isChangeColor ? '#fd6b36' : '#e7e6e5')};
  border-radius: 50%;
  margin-bottom: 6px;
`;

export const KeyWordList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 19px 17px;
`;

export const ClickedKeyWord = styled.li<ChangeColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${props => (props.isChangeColor ? '#fd6b36' : '#e7e6e5')};
  border-radius: 14px;
  padding: 13px 0;
  font-size: 14px;
  cursor: pointer;

  p {
    color: ${props => (props.isChangeColor ? '#fd6b36' : '#979797')};
    font-weight: bold;
  }
`;
