import { matrixAdjacency as matrizAdjacencia } from './util';

let pais;
let distancias;
let verticesAbertos;

export default function init(verticeInicial, verticeDestino) {
  pais = [];
  distancias = [];
  verticesAbertos = [];

  for (let i = 0; i <= 32; i++) {
    pais[i] = null;
    distancias[i] = Number.POSITIVE_INFINITY;
    verticesAbertos.push(i);
  }

  return dijkstra(verticeInicial, verticeDestino);
}

function dijkstra(verticeInicial, verticeDestino) {
  distancias[verticeInicial] = 0;

  relaxaVertice();
  return printMenorCaminho(verticeInicial, verticeDestino);
}

function relaxaVertice() {
  while (verticesAbertos.length > 0) {
    let menorDistancia = Number.POSITIVE_INFINITY;
    let verticeFechado;
    verticesAbertos.forEach(vertice => {
      if (menorDistancia > distancias[vertice]) {
        menorDistancia = distancias[vertice];
        verticeFechado = vertice;
      }
    });
    verticesAbertos.splice(verticesAbertos.indexOf(verticeFechado), 1);
    const verticesAdjacentes = matrizAdjacencia[verticeFechado];

    if (verticesAdjacentes != null) {
      for (let i = 0; i < verticesAdjacentes.length; i++) {
        const peso = verticesAdjacentes[i];
        if (peso > 0) {
          if (distancias[i] > distancias[verticeFechado] + peso) {
            distancias[i] = distancias[verticeFechado] + peso;
            pais[i] = verticeFechado;
          }
        }
      }
    }
  }
}

function printMenorCaminho(verticeInicial, verticeDestino) {
  const caminho = [verticeDestino];
  let distanciaTotal = 0;
  while (pais[verticeDestino] != null) {
    const verticeOrigem = pais[verticeDestino];
    const distancia = matrizAdjacencia[verticeOrigem][verticeDestino];
    distanciaTotal += distancia;
    caminho.unshift(verticeOrigem);
    verticeDestino = pais[verticeDestino];
  }
  console.log(`Menor caminho: ${caminho}`);
  console.log(`Distância Total: ${distanciaTotal}`);

  return {
    distance: distanciaTotal,
    nodes: caminho,
  };
  //   document.querySelector(
  //     '#menorCaminho'
  //   ).textContent = `Menor caminho: ${caminho}`;
  //   document.querySelector(
  //     '#distanciaTotal'
  //   ).textContent = `Distância Total: ${distanciaTotal}`;
}
