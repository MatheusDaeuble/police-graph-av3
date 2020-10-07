export const vertices = [
  {
    position: {
      x: 200,
      y: 283,
    },
  },
  {
    position: {
      x: 350,
      y: 442,
    },
  },
  {
    position: {
      x: 250,
      y: 55,
    },
  },
  {
    position: {
      x: 585,
      y: 180,
    },
  },
  {
    position: {
      x: 360,
      y: 315,
    },
  },
  {
    position: {
      x: 470,
      y: 355,
    },
  },
  {
    position: {
      x: 485,
      y: 155,
    },
  },
  {
    position: {
      x: 365,
      y: 95,
    },
  },
];

export const createPoliceCarsArray = number => vertices.slice(0, number);

export const getRandomVertices = cars => {
  const randomNumbers = [...Array(vertices.length).keys()].sort(
    () => Math.random() - 0.5
  );
  return cars.map(() => vertices[randomNumbers.pop()]);
};
