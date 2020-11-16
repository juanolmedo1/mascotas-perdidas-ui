import PUBLICATION_ENTITY from '@entities/Publication';

export const LABELS = {
  title: 'Confirmación requerida',
  buttons: {
    confirm: 'Confirmar',
    reject: 'Rechazar'
  },
  confirmationText: (publicationType, userFirstName, userLastName, username) =>
    `${userFirstName} ${userLastName} (@${username}) ${
      publicationType === PUBLICATION_ENTITY.types.lost
        ? 'encontró a su mascota '
        : 'encontró al dueño de su mascota publicada'
    } y marcó que era la mascota de tu publicación. ¿Esto es así?`,
  dialogs: {
    fail:
      '¡Ups! Ocurrió un error con esta notificación, por favor vuelva a intentar.',
    success: '¡Gracias por tu respuesta!'
  }
};
