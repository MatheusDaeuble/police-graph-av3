import React from 'react';
import Game from './components/Game';
import { Background, Container } from './styles';

const Home = () => {
  return (
    <Background>
      <Container>
        <Game />
      </Container>
    </Background>
  );
};

export default Home;
