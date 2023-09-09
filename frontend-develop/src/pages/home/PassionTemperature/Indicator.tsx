import { FC, RefObject } from 'react';

import styled from '@emotion/styled';

import { thermometerPercentList } from 'components/PassionThermometer/mock';

import { ReactComponent as SmileIcon } from '../res/img/smile.svg';

import { SHOW_INDICATOR_PERCENT } from './constants';
import { FlexCenterContainer } from './PassionTemperature.style';
import { getTotalPercent } from './utils';

interface Props {
  indicatorRef: RefObject<HTMLElement>;
  totalWidth: number;
}

const Indicator: FC<Props> = ({ totalWidth, indicatorRef }) => {
  const totalPercent = getTotalPercent(thermometerPercentList);

  if (totalPercent > SHOW_INDICATOR_PERCENT) return <></>;

  return (
    <Container ref={indicatorRef as RefObject<HTMLDivElement>} left={`${totalWidth}px`}>
      <IndicatorText>열정온도 60℃</IndicatorText>
      <SmileIcon />
    </Container>
  );
};

export default Indicator;

const Container = styled(FlexCenterContainer)<{ left: string }>`
  position: absolute;
  left: ${({ left }) => left};
`;

const IndicatorText = styled.span`
  color: var(--orange-500, #fd6b36);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px;
  margin-right: 4px;
`;
