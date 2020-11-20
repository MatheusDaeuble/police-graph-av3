/* eslint-disable */
export const matrixAdjacency = [
    //   00  01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
        [ 0, 50,  0,  0,  0,  0, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 00
        [50,  0, 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 01
        [ 0, 30,  0, 25,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 02
        [ 0,  0, 25,  0, 52,  0,  0,  0, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 03
        [ 0,  0,  0, 52,  0,  0,  0,  0,  0, 37,  0,  0,  0,  0, 62,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 04
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0, 18, 21,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 05
        [15,  0,  0,  0,  0,  0,  0, 46,  0,  0,  0, 73,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 06
        [ 0,  0,  0,  0,  0,  0, 46,  0, 52,  0,  0,  0, 34,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 07
        [ 0,  0,  0, 21,  0,  0,  0, 52,  0,  0,  0,  0,  0, 41, 47,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 08
        [ 0,  0,  0,  0, 37, 18,  0,  0,  0,  0,  9,  0,  0,  0,  0, 35,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 09
        [ 0,  0,  0,  0,  0, 21,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 10
        [ 0,  0,  0,  0,  0,  0, 73,  0,  0,  0,  0,  0, 47,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 11
        [ 0,  0,  0,  0,  0,  0,  0, 34,  0,  0,  0, 47,  0, 51,  0,  0,  0, 18,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 12
        [ 0,  0,  0,  0,  0,  0,  0,  0, 41,  0,  0,  0, 51,  0,  0,  0,  0,  0, 43,  0,  0,  0,  0,  0, 70,  0,  0,  0,  0,  0,  0,  0,  0], // 13
        [ 0,  0,  0,  0, 62,  0,  0,  0, 47,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 50,  0,  0,  0,  0,  0,  0,  0,  0], // 14
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0, 35,  0,  0,  0,  0,  0,  0, 29,  0,  0, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 15
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 32,  0,  0,  0,  0, 29,  0,  0,  0,  0, 23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 16
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 18,  0,  0,  0,  0,  0, 35,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 17
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 43,  0,  0,  0, 35,  0,  0,  0,  0,  0,  8, 72,  0,  0,  0,  0,  0,  0,  0,  0], // 18
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  0,  0,  0,  0, 31,  0,  0,  0, 20,  0,  0,  0,  0,  0,  0,  0,  0], // 19
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0, 31,  0,  0,  0,  0,  0, 42,  0,  0,  0,  0,  0,  0,  0], // 20
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 33,  0,  0,  0, 30,  0,  0,  0,  0,  0,  0], // 21
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 33,  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0], // 22
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  8,  0,  0,  0, 17,  0,  0,  0,  0, 33, 80,  0,  0,  0,  0], // 23
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 70, 50,  0,  0,  0, 72, 20,  0,  0,  0,  0,  0, 33,  0,  0, 30,  0,  0,  0,  0], // 24
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 42,  0,  0,  0, 33,  0,  0,  0,  0, 59,  0,  0,  0], // 25
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 30,  0,  0,  0,  0,  0, 58,  0,  0,  0,  0,  0], // 26
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 33,  0,  0, 58,  0,  0,  0, 60,  0,  0], // 27
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 80, 30,  0,  0,  0,  0, 41,  0, 34,  0], // 28
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 59,  0,  0, 41,  0,  0,  0, 30], // 29
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 60,  0,  0,  0, 29,  0], // 30
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 34,  0, 29,  0, 32], // 31
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 30,  0, 32,  0], // 32
    //   00  01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
    ];
  /* eslint-disable */

export const coordinates = [
  { x: 151, y: 704 },
  { x: 201, y: 555 },
  { x: 295, y: 490 },
  { x: 300, y: 392 },
  { x: 312, y: 215 },
  { x: 330, y: 58 },
  { x: 218, y: 665 },
  { x: 368, y: 578 },
  { x: 399, y: 392 },
  { x: 392, y: 85 },
  { x: 416, y: 55 },
  { x: 540, y: 770 },
  { x: 510, y: 615 },
  { x: 528, y: 445 },
  { x: 540, y: 310 },
  { x: 540, y: 144 },
  { x: 557, y: 54 },
  { x: 583, y: 611 },
  { x: 667, y: 506 },
  { x: 615, y: 173 },
  { x: 651, y: 50 },
  { x: 691, y: 718 },
  { x: 681, y: 592 },
  { x: 709, y: 531 },
  { x: 707, y: 215 },
  { x: 790, y: 89 },
  { x: 789, y: 762 },
  { x: 799, y: 595 },
  { x: 838, y: 262 },
  { x: 985, y: 142 },
  { x: 886, y: 417 },
  { x: 978, y: 316 },
  { x: 1055, y: 229 },
];

export const STATUS = {
  RUNNING: 'running',
  PAUSED: 'paused',
};

export const getRandomAdjacentNode = (node) => {
  const choices = matrixAdjacency[node].filter(Boolean);
  const selected = choices[Math.floor(Math.random() * choices.length)];
  return matrixAdjacency[node].indexOf(selected);
};

export const getDistance = (from, to) => matrixAdjacency[from][to]
