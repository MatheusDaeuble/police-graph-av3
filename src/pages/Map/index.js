import React, { useState } from 'react';
import dijkstra from './dijkstra';
import { Background, Container, Map, Point } from './styles';
import PoliceCar from './components/PoliceCar';
import mapImage from '~/assets/images/map.jpeg';

import { coordinates, STATUS } from './util';

const MapPage = () => {
  const [status, setStatus] = useState(STATUS.RUNNING);
  const [carsData, setCarsData] = useState({});
  const [eventRoute, setEventRoute] = useState([]);
  const [carOnRoute, setCarOnRoute] = useState();

  const toggleStatus = () => {
    setStatus(status === STATUS.RUNNING ? STATUS.PAUSED : STATUS.RUNNING);
  };

  const calculateRoute = node => {
    if (status === STATUS.RUNNING) {
      let best;
      Object.keys(carsData).forEach(key => {
        const result = dijkstra(carsData[key], node);
        if (!best || result.distance < best.distance) {
          best = { ...result, key: Number(key) };
        }
      });
      setEventRoute(best.nodes.reverse().slice(0, best.nodes.length - 1));
      setCarOnRoute(best.key);
    }
    toggleStatus();
  };

  const renderPoints = () =>
    coordinates.map((coord, i) => (
      <Point
        coordinates={coord}
        isRoute={eventRoute.includes(i)}
        onClick={() => calculateRoute(i)}
      />
    ));

  const renderCars = () =>
    [...Array(3)].map((_, key) => (
      <PoliceCar
        status={status}
        route={eventRoute.length && carOnRoute === key ? eventRoute : []}
        onChangeNode={node => setCarsData({ ...carsData, [key]: node })}
        onChangeRoute={setEventRoute}
      />
    ));

  return (
    <Background>
      <Container>
        <Map src={mapImage} />
        {renderPoints()}
        {renderCars()}
      </Container>
    </Background>
  );
};

export default MapPage;
