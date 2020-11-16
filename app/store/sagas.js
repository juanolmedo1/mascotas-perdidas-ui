import {
  deactivatePublicationSaga,
  deletePublicationSaga,
  fetchPublicationSaga,
  getHeatMapPublicationsSaga,
  getResolvedCandidatesSaga,
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
import {
  deleteNotificationSaga,
  fetchUserNotificationsSaga,
  getConfirmUserPublicationSaga,
  getNotificationUserPublicationSaga,
  updatePublicationsSaga
} from '@notifications/store/sagas';
import {
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
} from '@likes/store/sagas';

export default {
  deactivatePublicationSaga,
  deleteNotificationSaga,
  deletePublicationSaga,
  detectTypeAndBreedSaga,
  fetchLoginSaga,
  fetchUserNotificationsSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserFavoritesSaga,
  fetchUserPublicationsSaga,
  getCommonBreedAttributesSaga,
  getConfirmUserPublicationSaga,
  getHeatMapPublicationsSaga,
  getNotificationUserPublicationSaga,
  getResolvedCandidatesSaga,
  getSimilarPublicationsSaga,
  onFavPublicationSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  onUnfavPublicationSaga,
  reportPublicationSaga,
  registerUserSaga,
  saveNotificationTokenSaga,
  updatePublicationSaga,
  updatePublicationsSaga
};
