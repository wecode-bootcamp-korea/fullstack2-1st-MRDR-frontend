import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationNumber = styled.button<{ isActive: boolean }>`
  width: 39px;
  height: 39px;
  color: ${props => (props.isActive ? '#fff' : '#000')};
  background-color: ${props => (props.isActive ? '#FD6B36' : 'transparent')};
  border-radius: 14px;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const LeftDoubleArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const LeftArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
  margin: 0 10px;
`;

export const RightDoubleArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const RightArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  margin: 0 10px;
  background-color: #f0f0f0;
  cursor: pointer;
`;
