import {
  fetchLocationsSaga,
  fetchProvincesSaga
} from '@core/store/ubication/sagas';
import { fetchPublicationSaga } from '@core/store/currentPublication/sagas';
import { fetchLoginSaga } from '@login/store/sagas';
import { fetchPublicationsSaga } from '@home/store/sagas';
import { onPublicationCreatedSaga } from '@upload/store/sagas';

export default {
  fetchLocationsSaga,
  fetchLoginSaga,
  fetchProvincesSaga,
  fetchPublicationsSaga,
  onPublicationCreatedSaga,
  fetchPublicationSaga
};
