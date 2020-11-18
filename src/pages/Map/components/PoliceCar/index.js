import React, { useState } from 'react';

import policeCarImage from '~/assets/images/police.png';
import AlarmImage from '~/assets/images/alarm.png';

import { Car, CarContainer, Alarm } from './styles';
import { coordinates, getRandomAdjacentNode } from '../../util';

const PoliceCar = ({ status, onChangeNode, route }) => {
  const [node, setNode] = useState(Math.floor(Math.random() * 33));
  const [to, setTo] = useState(coordinates[node]);
  const [from, setFrom] = useState(coordinates[node]);

  const nextStep = () => {
    route.shift();
    const nextNode = route.length ? route[0] : getRandomAdjacentNode(node);

    onChangeNode(nextNode);
    setNode(nextNode);
    setFrom(to);
    setTo(coordinates[nextNode]);
  };

  return (
    <CarContainer onAnimationEnd={nextStep} to={to} from={from} status={status}>
      {!!route.length && <Alarm src={AlarmImage} />}
      <Car src={policeCarImage} />
    </CarContainer>
  );
};

export default PoliceCar;
