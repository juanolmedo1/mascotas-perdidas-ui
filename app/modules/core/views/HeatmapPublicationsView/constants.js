import PET_ENTITY from '@entities/Pet';

export const LABELS = {
  headerTitle: 'Mapa de calor',
  introductionText: petType =>
    `Los puntos de calor hacen referencia a dónde fueron encontrados los ${
      petType === PET_ENTITY.types.dog ? 'perros' : 'gatos'
    } perdidos dentro de la región delimitada`,
  noInformation:
    '¡Lo sentimos! No tenemos información sobre publicaciones cerca de su ubicación.',
  requestFailed: '¡Ups! Ocurrió un error al intentar mostrar el mapa de calor'
};

export const OFFSET = 0.005;

export const CIRCLE = {
  radius: OFFSET * 100000,
  fillColor: 'rgba(244, 154, 48, 0.4)'
};

export const HEATMAP = {
  radius: 50,
  gradientOptions: {
    colors: ['rgba(0,166,63,0.3)', '#F7FF00', '#FF2D00'],
    startPoints: [0.1, 0.8, 1],
    colorMapSize: 256
  }
};

export const MAP_DELTA = 0.05;
