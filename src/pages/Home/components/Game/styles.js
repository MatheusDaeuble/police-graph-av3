import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
  background-color: ${colors.black};
  color: red;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  justify-content: center;
  background-color: ${colors.white};
  color: black;
  padding: 20px;
  font-size: 150%;
`;

export const XStyled = styled.div`
  font-size: 25px;
  color: ${colors.primary};
`;

export const OStyled = styled.div`
  font-size: 25px;
  color: ${colors.danger};
`;
