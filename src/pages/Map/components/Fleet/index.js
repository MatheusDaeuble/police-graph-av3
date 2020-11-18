import React from 'react';

import { NUMBERS_OF_CARS } from '~/settings';

import PoliceCar from './PoliceCar';

const Fleet = ({
  status,
  eventRoute,
  setCarsData,
  carsData,
  setEventRoute,
  carOnRoute,
}) =>
  [...Array(NUMBERS_OF_CARS)].map((_, key) => (
    <PoliceCar
      status={status}
      route={eventRoute.length && carOnRoute === key ? eventRoute : []}
      onChangeNode={node => setCarsData({ ...carsData, [key]: node })}
      onChangeRoute={setEventRoute}
      key={key.toString()}
    />
  ));

export default Fleet;
