import {
  deletePublicationSaga,
  fetchPublicationSaga,
  getHeatMapPublicationsSaga,
  getSimilarPublicationsSaga,
  reportPublicationSaga,
  updatePublicationSaga
} from '@core/store/currentPublication/sagas';
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
  onSelectedImagesSaga
} from '@upload/store/sagas';
import { registerUserSaga } from '@register/store/sagas';
import { fetchUserNotificationsSaga } from '@notifications/store/sagas';
import {
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
} from '@likes/store/sagas';

export default {
  deletePublicationSaga,
  detectTypeAndBreedSaga,
  fetchLoginSaga,
  fetchUserNotificationsSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserFavoritesSaga,
  fetchUserPublicationsSaga,
  getCommonBreedAttributesSaga,
  getHeatMapPublicationsSaga,
  getSimilarPublicationsSaga,
  onFavPublicationSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  onUnfavPublicationSaga,
  reportPublicationSaga,
  registerUserSaga,
  updatePublicationSaga,
  saveNotificationTokenSaga
};
