import styled, { keyframes } from 'styled-components';
import { ANIMATION_TIME } from '~/settings';

const ADJUST_POSITION_CAR_Y = -10;
const ADJUST_POSITION_CAR_X = -20;

const carAnimation = (from, to) => {
  const fromString = `from {transform: translate(${from.x}px, -${from.y}px);}`;
  const toString = `to {transform: translate(${to.x}px, -${to.y}px);}`;
  return keyframes`
  ${fromString}
  ${toString}
`;
};

export const Alarm = styled.img`
  position: absolute;
  height: 30px;
  bottom: 30px;
  left: 12px;
`;

export const CarContainer = styled.div`
  z-index: 1;
  position: absolute;
  bottom: ${ADJUST_POSITION_CAR_Y}px;
  left: ${ADJUST_POSITION_CAR_X}px;
  animation: ${({ to, from }) => carAnimation(from, to)};
  animation-play-state: ${({ status }) => status};
  animation-duration: ${ANIMATION_TIME}s;
  animation-fill-mode: forwards;
`;

export const Car = styled.img`
  height: 30px;
`;
