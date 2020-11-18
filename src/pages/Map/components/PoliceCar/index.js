import React, { useState } from 'react';

import policeCarImage from '~/assets/images/police.png';
import AlarmImage from '~/assets/images/alarm.png';

import { Car, CarContainer, Alarm } from './styles';
import { matrixAdjacency, coordinates } from '../../util';

const PoliceCar = ({ status, onChangeNode, route, onChangeRoute }) => {
  const [node, setNode] = useState(Math.floor(Math.random() * 33));
  const [to, setTo] = useState({ x: 0, y: 0 });
  const [from, setFrom] = useState({ x: 0, y: 0 });

  const nextStep = () => {
    let nextNode;
    if (route.length) {
      if (coordinates[route[0]].x === to.x && coordinates[route[0]].y === to.y)
        // Skip next node if equal to last (It happen when start route)
        route.shift();
      nextNode = route.shift();
      onChangeRoute(route);
    } else {
      const choices = matrixAdjacency[node].filter(Boolean);
      const selected = choices[Math.floor(Math.random() * choices.length)];
      nextNode = matrixAdjacency[node].indexOf(selected);
    }
    onChangeNode(nextNode);
    setNode(nextNode);
    setFrom(to);
    setTo(coordinates[nextNode]);
  };

  return (
    <CarContainer
      onAnimationEnd={() => nextStep()}
      to={to}
      from={from}
      status={status}>
      {!!route.length && <Alarm src={AlarmImage} />}
      <Car src={policeCarImage} />
    </CarContainer>
  );
};

export default PoliceCar;
