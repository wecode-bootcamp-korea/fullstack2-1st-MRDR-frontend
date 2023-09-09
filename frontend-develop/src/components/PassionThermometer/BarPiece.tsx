import { FC } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BAR_PIECE_COLOR } from './constants';
import { BarPieceAttr, BarPieceColor } from './types';
import { getBarWidth } from './utils';

export interface Props {
  barType: keyof BarPieceColor;
  percent: number;
  isTail: boolean;
  temperatureWidth?: number;
}

const BarPiece: FC<Props> = ({ percent, barType, temperatureWidth: tempratureWidth, isTail }) => {
  if (!percent) return <></>;

  const width = getBarWidth(percent, tempratureWidth);
  const percentage = percent < 3 ? '' : `${percent}%`;

  return (
    <Container isTail={isTail} width={width} color={BAR_PIECE_COLOR[barType]}>
      <CenterSpan>{percentage}</CenterSpan>
    </Container>
  );
};

export default BarPiece;

const Container = styled.li<BarPieceAttr>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  ${({ color, width, isTail }) => css`
    text-align: center;
    width: ${width};
    height: 100%;
    background: ${color} 0% 0% no-repeat padding-box;
    border-top-right-radius: ${isTail ? '200px' : '0px'};
    border-bottom-right-radius: ${isTail ? '200px' : '0px'};
  `}

  ${({ isTail }) =>
    isTail &&
    css`
      margin: auto 0;
      height: 12px;
    `}
`;

const CenterSpan = styled.div`
  margin-top: 3px;
  color: var(--black-400, #414140);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;
