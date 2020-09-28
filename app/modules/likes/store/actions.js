export const types = {
  FAV_PUBLICATION__FAILURE: 'FAV_PUBLICATION__FAILURE',
  FAV_PUBLICATION__REQUEST: 'FAV_PUBLICATION__REQUEST',
  FAV_PUBLICATION__SUCCESS: 'FAV_PUBLICATION__SUCCESS',
  FETCH_USER_FAVORITES__FAILURE: 'FETCH_USER_FAVORITES__FAILURE',
  FETCH_USER_FAVORITES__REQUEST: 'FETCH_USER_FAVORITES__REQUEST',
  FETCH_USER_FAVORITES__SUCCESS: 'FETCH_USER_FAVORITES__SUCCESS',
  UNFAV_PUBLICATION__FAILURE: 'UNFAV_PUBLICATION__FAILURE',
  UNFAV_PUBLICATION__REQUEST: 'UNFAV_PUBLICATION__REQUEST',
  UNFAV_PUBLICATION__SUCCESS: 'UNFAV_PUBLICATION__SUCCESS'
};

export const fetchFavorites = userId => ({
  payload: { userId },
  type: types.FETCH_USER_FAVORITES__REQUEST
});

export const fetchFavoritesFailure = error => ({
  payload: error,
  type: types.FETCH_USER_FAVORITES__FAILURE
});

export const fetchFavoritesSuccess = publications => ({
  payload: publications,
  type: types.FETCH_USER_FAVORITES__SUCCESS
});

export const addFavoritePublication = ({ userId, publicationId }) => ({
  payload: { userId, publicationId },
  type: types.FAV_PUBLICATION__REQUEST
});

export const addFavoritePublicationFailure = error => ({
  payload: error,
  type: types.FAV_PUBLICATION__FAILURE
});

export const addFavoritePublicationSuccess = ({
  userId,
  publicationId,
  publication
}) => ({
  payload: { userId, publicationId, publication },
  type: types.FAV_PUBLICATION__SUCCESS
});

export const deleteFavoritePublication = ({ userId, publicationId }) => ({
  payload: { userId, publicationId },
  type: types.UNFAV_PUBLICATION__REQUEST
});

export const deleteFavoritePublicationFailure = error => ({
  payload: error,
  type: types.UNFAV_PUBLICATION__FAILURE
});

export const deleteFavoritePublicationSuccess = ({
  userId,
  publicationId,
  publication
}) => ({
  payload: { userId, publicationId, publication },
  type: types.UNFAV_PUBLICATION__SUCCESS
});
