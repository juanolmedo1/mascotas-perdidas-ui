import PET_ENTITY from '@entities/Pet';

export const LABELS = {
  buttons: {
    confirm: 'Confirmar raza',
    next: 'Siguiente',
    skip: 'Ninguna raza coincide'
  },
  title: 'Razas detectadas',
  introduction: {
    description:
      'Por favor, seleccione alguna de las siguientes razas si se asemeja a la de su mascota',
    title: petType =>
      `¡Hemos detectado que la mascota es un ${
        petType === PET_ENTITY.types.cat.toLowerCase() ? 'gato' : 'perro'
      } y sus posibles razas!`
  },
  breed: {
    other: 'Other'
  },
  noDetection: {
    text:
      'No hemos detectado que la mascota sea un perro o gato, ni sus posibles razas. Si esto es incorrecto, por favor vuelva atrás e intente nuevamente, sino prosiga.'
  }
};
