import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as newPublicationActions from '@upload/store/actions';
import * as ubicationActions from '@core/store/ubication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { setCurrentLocation, setCurrentProvince } from '@login/store/actions';
import { LABELS } from '@upload/views/UploadView/constants';
import Button from '@core/components/Button';
import Dropdown from '@core/components/Dropdown';
import ImagesContainer from '@upload/components/ImagesContainer';
import LoadingView from '@core/views/LoadingView';
import DialogConfirmBox from '@core/components/DialogConfirmBox';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';
import styles from '@upload/views/UploadView/styles';

const UploadView = ({
  clearPublicationValues,
  getExtractedColors,
  getProvinces,
  getLocations,
  getTypeAndBreed,
  newPublication,
  navigation,
  ubications,
  session,
  setExtractedColors,
  setHasChanges,
  setPetColor,
  setPhoneNumber,
  setPublicationLocationId,
  setPublicationProvinceId,
  setPublicationPhotosArray,
  setUserId
}) => {
  const [showConfirmBackModal, setShowConfirmBackModal] = useState(false);

  const confirmBack = () => {
    setShowConfirmBackModal(false);
    clearPublicationValues();
    NavigationService.reset(0, 'Upload');
    NavigationService.goBack();
  };

  const cancelBack = () => {
    setShowConfirmBackModal(false);
  };

  const clearColorsValues = () => {
    setExtractedColors([]);
    setPetColor();
  };

  const openImagePicker = () => {
    clearColorsValues();
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
      mediaType: 'photo'
    })
      .then(images => {
        const MAX_SIZE = 3;
        const imagesMapped = images
          .reverse()
          .slice(0, MAX_SIZE)
          .map(image => {
            return { data: image.data, mime: image.mime, path: image.path };
          });
        setHasChanges();
        getTypeAndBreed(imagesMapped[0].data);
        setPublicationPhotosArray(imagesMapped);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const cancelAction = () => {
    if (newPublication.hasChanges) {
      setShowConfirmBackModal(true);
    } else {
      NavigationService.goBack();
    }
  };

  useEffect(() => {
    const backAction = () => {
      let shouldBlockUserGoBack = false;
      if (newPublication.hasChanges) {
        setShowConfirmBackModal(true);
        shouldBlockUserGoBack = true;
      }
      return shouldBlockUserGoBack;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [navigation, newPublication.hasChanges]);

  const { id: userId, phoneNumber: userPhoneNumber } = session.profileInfo;
  const { province, location } = session.currentUbication;

  useEffect(() => {
    getProvinces();
    getLocations(province);
    setPhoneNumber(userPhoneNumber);
    setUserId(userId);
  }, [
    getLocations,
    getProvinces,
    province,
    setPhoneNumber,
    setUserId,
    userId,
    userPhoneNumber
  ]);

  const updateProvince = value => {
    setHasChanges();
    setPublicationProvinceId(value);
    getLocations(value);
  };

  const updateLocation = value => {
    setHasChanges();
    setPublicationLocationId(value);
  };

  const navigateToBreedsView = () => {
    getExtractedColors(newPublication.photosArray);
    NavigationService.navigate('Breeds');
  };

  const { provinces, locations } = ubications;

  const userHasSelectedAtLeastOnePhoto = newPublication.photosArray.length > 0;

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.customHeader}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => cancelAction()}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelText}>{LABELS.buttons.cancel}</Text>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{LABELS.title}</Text>
          </View>
        </View>
        {!provinces.length || !locations.length ? (
          <LoadingView />
        ) : (
          <View style={styles.contentContainer}>
            <ImagesContainer images={newPublication.photosArray} />
            <Text style={styles.text}> {LABELS.photosInstructions} </Text>
            <Button
              text={LABELS.buttons.addPhotos}
              onPress={openImagePicker}
              type="tertiary"
            />
            <View>
              <Dropdown
                data={provinces}
                changeValue={updateProvince}
                selectedValue={province}
                title={LABELS.dropdowns.province}
              />
              <Dropdown
                data={locations}
                changeValue={updateLocation}
                selectedValue={location}
                title={LABELS.dropdowns.location}
              />
            </View>
            <Button
              disabled={!userHasSelectedAtLeastOnePhoto}
              text={LABELS.buttons.goToFilters}
              onPress={navigateToBreedsView}
              type="primary"
              rightArrow
            />
          </View>
        )}
        <DialogConfirmBox
          open={showConfirmBackModal}
          onCancel={cancelBack}
          onConfirm={confirmBack}
          modalText={LABELS.modal.modalText}
          confirmText={LABELS.modal.confirmText}
          cancelText={LABELS.modal.cancelText}
        />
      </View>
    </ImageBackground>
  );
};

UploadView.propTypes = {
  clearPublicationValues: PropTypes.func,
  getExtractedColors: PropTypes.func,
  getProvinces: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  setExtractedColors: PropTypes.func.isRequired,
  setHasChanges: PropTypes.func.isRequired,
  setPetColor: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setPublicationLocationId: PropTypes.func.isRequired,
  setPublicationProvinceId: PropTypes.func.isRequired,
  setPublicationPhotosArray: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
  newPublication: PropTypes.shape({
    additionalInformation: PropTypes.string,
    extractedColors: PropTypes.array,
    extractingColors: PropTypes.bool,
    hasChanges: PropTypes.bool,
    petCollar: PropTypes.bool,
    petColors: PropTypes.arrayOf(PropTypes.string),
    petGender: PropTypes.oneOf([...Object.values(PET_ENTITY.genders)]),
    petSize: PropTypes.oneOf([...Object.values(PET_ENTITY.sizes)]),
    petType: PropTypes.oneOf([...Object.values(PET_ENTITY.types)]),
    phoneNumber: PropTypes.string,
    photosArray: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.string,
        mime: PropTypes.string,
        path: PropTypes.string
      })
    ),
    publicationReward: PropTypes.bool,
    publicationType: PropTypes.oneOf([
      ...Object.values(PUBLICATION_ENTITY.types)
    ]),
    requestFailed: PropTypes.bool,
    requestInProgress: PropTypes.bool,
    similarPublications: PropTypes.arrayOf(PropTypes.object),
    userId: PropTypes.string
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
  clearPublicationValues: () => newPublicationActions.clearStore(),
  getExtractedColors: selectedImages =>
    newPublicationActions.getExtractedColors(selectedImages),
  getLocations: ubicationActions.fetchLocations,
  getProvinces: ubicationActions.fetchProvinces,
  getTypeAndBreed: image => newPublicationActions.getTypeAndBreedRequest(image),
  setExtractedColors: newExtractedColors =>
    newPublicationActions.setExtractedColors(newExtractedColors),
  setHasChanges: () => newPublicationActions.setHasChanges(),
  setPetColor: petColor => newPublicationActions.setPetColor(petColor),
  setPhoneNumber: phoneNumber =>
    newPublicationActions.setPhoneNumber(phoneNumber),
  setPublicationPhotosArray: photosArray =>
    newPublicationActions.setPhotosArray(photosArray),
  setPublicationProvinceId: provinceId => setCurrentProvince(provinceId),
  setPublicationLocationId: locationId => setCurrentLocation(locationId),
  setUserId: userId => newPublicationActions.setUserId(userId)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication,
  ubications: state.ubications,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadView);
