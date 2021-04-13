import React, { useState } from 'react';
import { Container, Box, XStyled, OStyled } from './styles';

const X = () => <XStyled>X</XStyled>;

const O = () => <OStyled>O</OStyled>;

const Game = () => {
  const [player, setPlayer] = useState('x');
  const [gameState, setGameState] = useState(new Array(9).fill(null));

  const togglePlayer = () => setPlayer(player === 'x' ? 'o' : 'x');

  const renderItem = item => {
    switch (item) {
      case 'x':
        return <X />;
      case 'o':
        return <O />;
      default:
        return null;
    }
  };

  const select = index => {
    if (!gameState[index]) {
      gameState[index] = player;
      togglePlayer();
      setGameState(gameState);
    }
  };

  return (
    <Container>
      {gameState.map((item, index) => (
        <Box onClick={() => select(index)}>{renderItem(item)}</Box>
      ))}
    </Container>
  );
};

export default Game;
