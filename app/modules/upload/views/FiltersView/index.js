import { connect } from 'react-redux';
import {
  BackHandler,
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import * as newPublicationActions from '@upload/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@upload/views/FiltersView/constants';
import AdditionalInformation from '@upload/components/AdditionalInformation';
import Button from '@core/components/Button';
import ColorSelector from '@app/modules/upload/components/ColorSelector';
import HasCollar from '@upload/components/HasCollar';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';
import PhoneNumber from '@upload/components/PhoneNumber';
import Reward from '@core/components/Reward';
import SingleSelectGender from '@upload/components/SingleSelectGender';
import SingleSelectPet from '@upload/components/SingleSelectPet';
import SingleSelectPublication from '@upload/components/SingleSelectPublication';
import SingleSelectSize from '@upload/components/SingleSelectSize';
import styles from '@upload/views/FiltersView/styles';
import IconIon from 'react-native-vector-icons/Ionicons';
import variables from '@styles/variables';

const FiltersView = ({
  createPublication,
  navigation,
  newPublication,
  setPetColor,
  setPetCollar,
  setPetGender,
  setPetType,
  setPetSize,
  setPublicationReward,
  setPublicationType
}) => {
  const {
    requestFailed,
    requestInProgress,
    requestCommonBreedValuesInProgress,
    requestCommonBreedValuesFail,
    similarPublications,
    ...newPublicationRest
  } = newPublication;

  const hasSelectedColor = newPublication.petColors.length > 0;
  const preloadedAttributes =
    newPublication.petBreed !== 'Other' && !requestCommonBreedValuesFail;

  useEffect(() => {
    const backAction = () => {
      NavigationService.goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [navigation]);

  const [phoneNumberText, setPhoneNumberText] = useState(
    newPublication.phoneNumber
  );

  const [additionalInformationText, setAdditionalInformationText] = useState(
    newPublication.additionalInformation
  );

  const createNewPublication = () => {
    const newPublicationValues = {
      ...newPublicationRest,
      petColors: newPublicationRest.petColors.sort(),
      phoneNumber: phoneNumberText,
      additionalInformation: additionalInformationText
    };
    createPublication(newPublicationValues);
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => NavigationService.goBack()}
          >
            <IconIon
              name="md-arrow-back"
              size={25}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        {newPublication.extractingColors ||
        newPublication.requestCommonBreedValuesInProgress ? (
          <LoadingView />
        ) : (
          <View>
            {preloadedAttributes ? (
              <View style={styles.block}>
                <Text style={styles.preloadedText}>{LABELS.preloadedText}</Text>
              </View>
            ) : null}
            <View style={styles.block}>
              <Text style={styles.subtitle}>{LABELS.subtitle}</Text>
            </View>
            <View style={styles.block}>
              <SingleSelectPet
                petType={newPublication.petType}
                onSelect={setPetType}
              />
            </View>
            <View style={styles.block}>
              <SingleSelectPublication
                publicationType={newPublication.publicationType}
                onSelect={setPublicationType}
              />
            </View>
            <View style={styles.block}>
              <SingleSelectGender
                petGender={newPublication.petGender}
                onSelect={setPetGender}
              />
            </View>
            <View style={styles.block}>
              <SingleSelectSize
                petSize={newPublication.petSize}
                onSelect={setPetSize}
                show={newPublication.petType === PET_ENTITY.types.dog}
              />
            </View>
            <View style={styles.block}>
              <ColorSelector
                extractedColors={newPublication.extractedColors}
                selectedColors={newPublication.petColors}
                onSelect={setPetColor}
              />
            </View>
            <View style={styles.block}>
              <View style={styles.rewardContainer}>
                <Reward
                  hasReward={newPublication.publicationReward}
                  onChange={setPublicationReward}
                  show={
                    newPublication.publicationType ===
                    PUBLICATION_ENTITY.types.lost
                  }
                />
                <HasCollar
                  show={
                    newPublication.publicationType !==
                    PUBLICATION_ENTITY.types.adoption
                  }
                  hasCollar={newPublication.petCollar}
                  onChange={setPetCollar}
                />
              </View>
            </View>
            <View style={styles.block}>
              <PhoneNumber
                phoneNumber={phoneNumberText}
                onChange={setPhoneNumberText}
              />
            </View>
            <View style={styles.block}>
              <AdditionalInformation
                information={additionalInformationText}
                onChange={setAdditionalInformationText}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={LABELS.buttons.publish}
                onPress={createNewPublication}
                type="primary"
                loading={requestInProgress}
                disabled={!hasSelectedColor}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

FiltersView.propTypes = {
  clearPublicationValues: PropTypes.func,
  createPublication: PropTypes.func.isRequired,
  setPetCollar: PropTypes.func.isRequired,
  setPetGender: PropTypes.func.isRequired,
  setPetType: PropTypes.func.isRequired,
  setPetSize: PropTypes.func.isRequired,
  setPublicationReward: PropTypes.func.isRequired,
  setPublicationType: PropTypes.func.isRequired,
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
  }).isRequired
};

const mapDispatchToProps = {
  createPublication: newPublication =>
    newPublicationActions.createPublicationRequest(newPublication),
  setPetColor: petColor => newPublicationActions.setPetColor(petColor),
  setPetCollar: hasCollar => newPublicationActions.setPetCollar(hasCollar),
  setPetGender: petGender => newPublicationActions.setPetGender(petGender),
  setPetType: petType => newPublicationActions.setPetType(petType),
  setPetSize: petSize => newPublicationActions.setPetSize(petSize),
  setPublicationReward: hasReward =>
    newPublicationActions.setPublicationReward(hasReward),
  setPublicationType: publicationType =>
    newPublicationActions.setPublicationType(publicationType)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
