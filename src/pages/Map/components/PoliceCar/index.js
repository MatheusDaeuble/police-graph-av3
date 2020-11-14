import React, { useState } from 'react';
import { Car } from './styles';
import policeCarImage from '~/assets/images/police.png';
import { matrixAdjacency, coordinates } from '../../util';

const PoliceCar = ({ status, onChangeNode, route, onChangeRoute }) => {
  const [node, setNode] = useState(Math.floor(Math.random() * 33));
  const [to, setTo] = useState({ x: 0, y: 0 });
  const [from, setFrom] = useState({ x: 0, y: 0 });

  const nextStep = () => {
    let nextNode;
    if (route.length) {
      nextNode = route.pop();
      onChangeRoute(route);
    } else {
      const choices = matrixAdjacency[node].filter(Boolean);
      const random = Math.floor(Math.random() * choices.length);
      const selected = choices[random];
      nextNode = matrixAdjacency[node].indexOf(selected);
    }

    onChangeNode(nextNode);
    setNode(nextNode);
    setFrom(to);
    setTo(coordinates[nextNode]);
  };

  return (
    <Car
      onAnimationEnd={() => nextStep()}
      src={policeCarImage}
      to={to}
      from={from}
      status={status}
      onRoute={!!route.length}
    />
  );
};

export default PoliceCar;
