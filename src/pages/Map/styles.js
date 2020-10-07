import styled from 'styled-components';
import { colors } from '~/styles';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: ${colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 0px 3px 0px ${colors.gray};
  border-radius: 10px;
  background-color: ${colors.white};
  align-items: center;
  z-index: 1;
`;

export const Map = styled.img`
  height: 580px;
`;
