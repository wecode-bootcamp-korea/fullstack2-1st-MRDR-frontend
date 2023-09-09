import { FC, RefObject } from 'react';

import styled from '@emotion/styled';

import BarPiece from './BarPiece';
import { ReactComponent as Temperature } from './res/img/temprature.svg';
import { ThermometerPercentList } from './types';

interface Props {
  temperatureWidth: number;
  temperatureRef: RefObject<HTMLElement>;
  thermometerPercentList: ThermometerPercentList;
}

const PassionThermometer: FC<Props> = ({
  temperatureWidth: temperatureWidth,
  temperatureRef: temperatureRef,
  thermometerPercentList,
}) => {
  return (
    <Container>
      <BarPieceList ref={temperatureRef as RefObject<HTMLUListElement>}>
        {Object.keys(thermometerPercentList).map((key, idx) => {
          const props = thermometerPercentList[key as keyof ThermometerPercentList];
          return (
            <BarPiece
              key={props.barType}
              isTail={Object.keys(thermometerPercentList).length - 1 === idx}
              temperatureWidth={temperatureWidth}
              {...props}
            />
          );
        })}
      </BarPieceList>

      <TemperatureIcon />
    </Container>
  );
};

export default PassionThermometer;

const Container = styled.div`
  position: relative;
  background: var(--background-primary-50, #f8f8f8);
`;

const TemperatureIcon = styled(Temperature)`
  width: 100%;
  height: 100%;
`;

const BarPieceList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 5;
  overflow: hidden;
  clip-path: url(#myClip);
`;
