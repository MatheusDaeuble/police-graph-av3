import React from 'react';
import { Car } from './styles';
import policeCarImage from '~/assets/images/police.png';

const PoliceCar = ({ car }) => {
  return <Car src={policeCarImage} position={car.position} />;
};

export default PoliceCar;
