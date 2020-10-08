import PET_ENTITY from '@entities/Pet';

export const LABELS = {
  buttons: {
    confirm: 'Confirmar raza',
    skip: 'Ninguna raza coincide'
  },
  title: 'Razas detectadas',
  introduction: {
    description:
      'Por favor, seleccione y confirme alguna de las siguientes razas si se asemeja a la de su mascota:',
    title: petType =>
      `¡Hemos detectado que su mascota es un ${
        petType === PET_ENTITY.types.cat.toLowerCase() ? 'gato' : 'perro'
      } y sus posibles razas!`
  }
};
