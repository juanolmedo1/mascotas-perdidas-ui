import { put, takeLatest, call } from 'redux-saga/effects';

import {
  addFavoritePublicationFailure,
  addFavoritePublicationSuccess,
  deleteFavoritePublicationFailure,
  deleteFavoritePublicationSuccess,
  fetchFavoritesSuccess,
  fetchFavoritesFailure,
  types
} from '@likes/store/actions';
import UserFavoritesService from '@likes/services/UserFavoritesService';

export function* fetchUserFavorites(action) {
  const { payload } = action;
  try {
    const userFavorites = yield call(
      UserFavoritesService.getFavoritesPublications,
      payload
    );
    yield put(fetchFavoritesSuccess(userFavorites));
  } catch (error) {
    yield put(fetchFavoritesFailure(error));
  }
}

export function* fetchUserFavoritesSaga() {
  yield takeLatest(types.FETCH_USER_FAVORITES__REQUEST, fetchUserFavorites);
}

export function* onFavPublication(action) {
  const { payload } = action;
  try {
    const { userId, publicationId, publication } = yield call(
      UserFavoritesService.favPublication,
      payload
    );
    yield put(
      addFavoritePublicationSuccess({ userId, publicationId, publication })
    );
  } catch (error) {
    yield put(addFavoritePublicationFailure(error));
  }
}

export function* onFavPublicationSaga() {
  yield takeLatest(types.FAV_PUBLICATION__REQUEST, onFavPublication);
}

export function* onUnfavPublication(action) {
  const { payload } = action;
  try {
    const { userId, publicationId, publication } = yield call(
      UserFavoritesService.unfavPublication,
      payload
    );
    yield put(
      deleteFavoritePublicationSuccess({ userId, publicationId, publication })
    );
  } catch (error) {
    yield put(deleteFavoritePublicationFailure(error));
  }
}

export function* onUnfavPublicationSaga() {
  yield takeLatest(types.UNFAV_PUBLICATION__REQUEST, onUnfavPublication);
}
