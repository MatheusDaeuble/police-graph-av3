import styled, { keyframes } from 'styled-components';

const ADJUST_POSITION_CAR_Y = -5;
const ADJUST_POSITION_CAR_X = -20;

const carAnimation = (from, to) => {
  const fromString = `from {transform: translate(${
    from.x + ADJUST_POSITION_CAR_X
  }px, -${from.y + ADJUST_POSITION_CAR_Y}px);}`;
  const toString = `to {transform: translate(${
    to.x + ADJUST_POSITION_CAR_X
  }px, -${to.y + ADJUST_POSITION_CAR_Y}px);}`;
  return keyframes`
  ${fromString}
  ${toString}
`;
};

export const Car = styled.img`
  z-index: 1;
  position: absolute;
  height: 30px;
  bottom: 0px;
  left: 0px;
  animation: ${({ to, from }) => carAnimation(from, to)};
  animation-play-state: ${({ status }) => status};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;
