import { connect } from 'react-redux';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as newPublicationActions from '@upload/store/actions';
import * as ubicationActions from '@core/store/ubication/actions';
import Button from '@core/components/Button';
import Dropdown from '@core/components/Dropdown';
import ImagesContainer from '@upload/components/ImagesContainer';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import styles from '@upload/views/UploadView/styles';

const UploadView = ({
  getProvinces,
  getLocations,
  newPublication,
  ubications,
  session,
  setPublicationLocationId,
  setPublicationProvinceId,
  setPublicationPhotosArray,
  setUserId
}) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
      mediaType: 'photo'
    })
      .then(images => {
        const MAX_SIZE = 3;
        const imagesMapped = images.slice(0, MAX_SIZE).map(image => {
          return { data: image.data, mime: image.mime, path: image.path };
        });
        setPublicationPhotosArray(imagesMapped);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { id: userId, ubication: userUbication } = session.profileInfo;

  useEffect(() => {
    getProvinces();
    getLocations(userUbication.province.id);
    setPublicationProvinceId(userUbication.province.id);
    setPublicationLocationId(userUbication.location.id);
    setUserId(userId);
  }, [
    getLocations,
    getProvinces,
    setPublicationLocationId,
    setPublicationProvinceId,
    setUserId,
    userId,
    userUbication.location.id,
    userUbication.province.id
  ]);

  const updateProvince = value => {
    setPublicationProvinceId(value);
    getLocations(value);
  };

  const updateLocation = value => {
    setPublicationLocationId(value);
  };

  const navigateToFilters = () => {
    const routeNameToNavigate = 'Filters';
    NavigationService.navigate(routeNameToNavigate);
  };

  const { provinces, locations } = ubications;

  if (!provinces.length || !locations.length) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <ImagesContainer images={newPublication.photosArray} />
      <Button
        text="+ Cargar fotos "
        onPress={openImagePicker}
        type="tertiary"
      />
      <View>
        <Dropdown
          data={provinces}
          changeValue={updateProvince}
          selectedValue={newPublication.provinceId}
          title="Provincia"
        />
        <Dropdown
          data={locations}
          changeValue={updateLocation}
          selectedValue={newPublication.locationId}
          title="Localidad"
        />
      </View>
      <Button
        text="Continuar"
        onPress={navigateToFilters}
        type="primary"
        rightArrow
      />
    </View>
  );
};

UploadView.propTypes = {
  getProvinces: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  setPublicationLocationId: PropTypes.func.isRequired,
  setPublicationProvinceId: PropTypes.func.isRequired,
  setPublicationPhotosArray: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
  newPublication: PropTypes.shape({
    locationId: PropTypes.string,
    petGender: PropTypes.string,
    petType: PropTypes.string,
    photosArray: PropTypes.arrayOf(PropTypes.string),
    provinceId: PropTypes.string,
    publicationType: PropTypes.string,
    userId: PropTypes.string,
    requestFailed: PropTypes.bool,
    requestInProgress: PropTypes.bool,
    similarPublications: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  ubications: PropTypes.shape({
    provincesInProgress: PropTypes.bool,
    provincesFailed: PropTypes.bool,
    provinces: PropTypes.array,
    locationsInProgress: PropTypes.bool,
    locationsFailed: PropTypes.bool,
    locations: PropTypes.array
  }).isRequired
};

const mapDispatchToProps = {
  getLocations: ubicationActions.fetchLocations,
  getProvinces: ubicationActions.fetchProvinces,
  setPublicationLocationId: locationId =>
    newPublicationActions.setLocationId(locationId),
  setPublicationPhotosArray: photosArray =>
    newPublicationActions.setPhotosArray(photosArray),
  setPublicationProvinceId: provinceId =>
    newPublicationActions.setProvinceId(provinceId),
  setUserId: userId => newPublicationActions.setUserId(userId)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication,
  ubications: state.ubications,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadView);
