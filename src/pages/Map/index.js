import React, { useState, useEffect } from 'react';

import { Background, Container, Map } from './styles';
import PoliceCar from './components/PoliceCar';
import mapImage from '~/assets/images/map.png';

import { createPoliceCarsArray, getRandomVertices } from './util';

const MapPage = () => {
  const [cars, setCars] = useState(createPoliceCarsArray(3));
  const renderCars = () => cars.map(car => <PoliceCar car={car} />);

  useEffect(() => {
    const interval = setInterval(() => setCars(getRandomVertices(cars)), 1000);
    return () => clearInterval(interval);
  }, [cars]);
  return (
    <Background>
      <Container>
        <Map src={mapImage} />
        {renderCars()}
      </Container>
    </Background>
  );
};

export default MapPage;
