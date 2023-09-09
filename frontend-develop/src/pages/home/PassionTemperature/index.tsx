import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { thermometerPercentList } from 'components/PassionThermometer/mock';
import PassionThermometer from 'components/PassionThermometer/Thermometer';

import Indicator from './Indicator';
import { FlexColumnContainer } from './PassionTemperature.style';
import { getTotalWidth } from './utils';

const PassionTemperature = () => {
  const temperatureRef = useRef<HTMLElement>(null);
  const [temperatureWidth, setTemperatureWidth] = useState(0);
  const indicatorRef = useRef<HTMLElement>(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  useEffect(() => {
    if (temperatureRef.current == null) return;
    setTemperatureWidth(temperatureRef.current.clientWidth);
  }, []);

  useEffect(() => {
    if (indicatorRef.current == null) return;
    setIndicatorWidth(indicatorRef.current.clientWidth);
  }, []);

  const totalWidth = getTotalWidth(temperatureWidth, thermometerPercentList, indicatorWidth);

  return (
    <FlexColumnContainer>
      <Title>열정온도</Title>
      <TemperatureContainer>
        <Description>IT프로그래밍 분야 중 상위 25%</Description>
        <Indicator indicatorRef={indicatorRef} totalWidth={totalWidth} />
        <PassionThermometer
          temperatureRef={temperatureRef}
          temperatureWidth={temperatureWidth}
          thermometerPercentList={thermometerPercentList}
        />
      </TemperatureContainer>
    </FlexColumnContainer>
  );
};

export default PassionTemperature;

const Title = styled.h2`
  margin-bottom: 16px;
  color: var(--black-500, #121110);
  font-feature-settings: 'ss10' on;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.134px;
`;

const Description = styled.h2`
  margin-bottom: 12px;
  color: var(--title-black, #121110);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TemperatureContainer = styled(FlexColumnContainer)`
  position: relative;
  padding: 32px 24px;
  border-radius: 12px;
  background: var(--background-primary-50, #f8f8f8);
`;
