import styled from 'styled-components';

export const Node = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 10px;
  left: ${({ coordinates }) => `${coordinates.x}px`};
  bottom: ${({ coordinates }) => `${coordinates.y}px`};
  background-color: ${({ isRoute }) => (isRoute ? 'red' : 'yellow')};
`;
