import styled from 'styled-components';

export const Car = styled.img`
  position: absolute;
  bottom: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  height: 45px;
`;
