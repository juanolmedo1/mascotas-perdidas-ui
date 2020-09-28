import { types } from '@likes/store/actions';

const initialState = {
  requestFavoritesInProgress: false,
  requestFavoritesFailed: false,
  requestFavoriteStatusChangeInProgress: false,
  requestFavoriteStatusChangeFailed: false,
  favoritesPublications: []
};

const addFavoritePublication = (state, payload) => {
  const newFavorites = [payload.publication, ...state.favoritesPublications];
  return {
    ...state,
    requestFavoritesInProgress: false,
    requestFavoritesFailed: false,
    favoritesPublications: newFavorites
  };
};

const removeFavoritePublication = (state, payload) => {
  const newFavorites = [...state.favoritesPublications];
  const publicationToRemoveIndex = newFavorites.findIndex(
    publication => publication.id === payload.publicationId
  );
  newFavorites.splice(publicationToRemoveIndex, 1);
  return {
    ...state,
    requestFavoritesInProgress: false,
    requestFavoritesFailed: false,
    favoritesPublications: newFavorites
  };
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_USER_FAVORITES__REQUEST:
      return {
        ...state,
        requestFavoritesInProgress: true,
        requestFavoritesFailed: false
      };
    case types.FETCH_USER_FAVORITES__FAILURE:
      return {
        ...state,
        requestFavoritesInProgress: false,
        requestFavoritesFailed: true
      };
    case types.FETCH_USER_FAVORITES__SUCCESS:
      return {
        ...state,
        requestFavoritesInProgress: false,
        requestFavoritesFailed: false,
        favoritesPublications: payload
      };
    case types.FAV_PUBLICATION__REQUEST:
      return {
        ...state,
        requestFavoriteStatusChangeInProgress: true,
        requestFavoriteStatusChangeFailed: false
      };
    case types.FAV_PUBLICATION__FAILURE:
      return {
        ...state,
        requestFavoriteStatusChangeInProgress: false,
        requestFavoriteStatusChangeFailed: true
      };
    case types.FAV_PUBLICATION__SUCCESS:
      return addFavoritePublication(state, payload);
    case types.UNFAV_PUBLICATION__REQUEST:
      return {
        ...state,
        requestFavoriteStatusChangeInProgress: true,
        requestFavoriteStatusChangeFailed: false
      };
    case types.UNFAV_PUBLICATION__FAILURE:
      return {
        ...state,
        requestFavoriteStatusChangeInProgress: false,
        requestFavoriteStatusChangeFailed: true
      };
    case types.UNFAV_PUBLICATION__SUCCESS:
      return removeFavoritePublication(state, payload);
    default:
      return state;
  }
}
