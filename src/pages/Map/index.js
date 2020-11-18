import React, { useState } from 'react';

import mapImage from '~/assets/images/map.jpeg';

import NodesList from './components/NodesList';
import Fleet from './components/Fleet';
import { Background, Container, Map } from './styles';
import dijkstra from './dijkstra';
import { STATUS } from './util';

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
      setEventRoute(best.nodes);
      setCarOnRoute(best.key);
    }
    toggleStatus();
  };

  return (
    <Background>
      <Container>
        <Map src={mapImage} />
        <NodesList calculateRoute={calculateRoute} eventRoute={eventRoute} />
        <Fleet
          status={status}
          eventRoute={eventRoute}
          setCarsData={setCarsData}
          carsData={carsData}
          setEventRoute={setEventRoute}
          carOnRoute={carOnRoute}
        />
      </Container>
    </Background>
  );
};

export default MapPage;
