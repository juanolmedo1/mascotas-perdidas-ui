import {
  deletePublicationSaga,
  fetchPublicationSaga,
  getHeatMapPublicationsSaga,
  getSimilarPublicationsSaga,
  reportPublicationSaga
} from '@core/store/currentPublication/sagas';
import { getTemporalPublicationSaga } from '@core/store/temporalPublication/sagas';
import {
  fetchLoginSaga,
  fetchUserPublicationsSaga,
  saveNotificationTokenSaga
} from '@login/store/sagas';
import { fetchPublicationsSaga } from '@home/store/sagas';
import {
  detectTypeAndBreedSaga,
  getCommonBreedAttributesSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  createTemporalPublicationSaga
} from '@upload/store/sagas';
import { registerUserSaga } from '@register/store/sagas';
import { fetchUserNotificationsSaga } from '@notifications/store/sagas';
import {
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
} from '@likes/store/sagas';

export default {
  createTemporalPublicationSaga,
  deletePublicationSaga,
  detectTypeAndBreedSaga,
  fetchLoginSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserPublicationsSaga,
  getCommonBreedAttributesSaga,
  getHeatMapPublicationsSaga,
  getSimilarPublicationsSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  reportPublicationSaga,
  registerUserSaga,
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga,
  saveNotificationTokenSaga,
  fetchUserNotificationsSaga,
  getTemporalPublicationSaga
};
