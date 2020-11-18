import React from 'react';

import { Node } from './styles';
import { coordinates } from '~/pages/Map/util';

const NodesList = ({ calculateRoute, eventRoute }) =>
  coordinates.map((coord, i) => (
    <Node
      coordinates={coord}
      isRoute={eventRoute.includes(i)}
      onClick={() => calculateRoute(i)}
      key={i.toString()}
    />
  ));

export default NodesList;
