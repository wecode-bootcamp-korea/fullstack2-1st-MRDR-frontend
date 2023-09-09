import { FC } from 'react';

import styled from '@emotion/styled';

import { ReactComponent as Smile } from './res/img/smile.svg';

interface Props {
  temperature: number;
}

const Indicator: FC<Props> = ({ temperature }) => {
  return (
    <Container>
      <p>{`열정온도 ${temperature}℃`}</p>
      <IconWrapper>
        <SmileIcon />
      </IconWrapper>
    </Container>
  );
};

export default Indicator;

const Container = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  background-color: red;
`;

const SmileIcon = styled(Smile)`
  margin-left: 0.4rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
