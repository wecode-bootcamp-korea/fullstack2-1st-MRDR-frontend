import styled from '@emotion/styled';

import { CAROUSEL_WIDTH, SlideDirection } from './Carousel';

export const container = styled.div`
  height: 436px;
  position: relative;
  color: white;
  background-color: #ffe7de;
  //background-color: lightslategrey;
  border-radius: 14px;
`;

export const ImageContainer = styled.div<{ count: number }>`
  width: ${props => (props.count ? props.count * CAROUSEL_WIDTH + 'px' : '100%')};
  height: 100%;
  position: absolute;
  display: flex;
  //grid-template-columns: repeat(${props => props.count}, 1fr);
  //transition: 0.5s left ease-in-out 0s;
`;

export const ArrowButton = styled.button<{ direction: SlideDirection }>`
  width: 67px;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  transform: translateX(${props => (props.direction === 'left' ? '-50%' : '50%')}) translateY(-50%);
  right: ${props => (props.direction === 'right' ? 0 : 'none')};
  box-shadow: 0px 4px 13px #0000001c;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  z-index: 10;
`;

export const CarouselNavigation = styled.ul`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const ControlsButton = styled.button<{ activated: boolean }>`
  border-radius: ${props => (props.activated ? '7px' : '100%')};
  background-color: ${props => (props.activated ? 'orange' : '#00000061')};
  width: ${props => (props.activated ? '24px' : '11px')};
  height: 11px;
  cursor: pointer;
  transition: 0.1s width ease-in-out 0s;
`;
