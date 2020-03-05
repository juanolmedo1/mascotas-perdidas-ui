import { fetchLoginSaga } from '@login/store/sagas';
import { fetchPublicationsSaga } from '@home/store/sagas';
import {
  fetchLocationsSaga,
  fetchProvincesSaga
} from '@core/store/ubication/sagas';

export default {
  fetchLoginSaga,
  fetchPublicationsSaga,
  fetchProvincesSaga,
  fetchLocationsSaga
};
