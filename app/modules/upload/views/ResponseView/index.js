import { connect } from 'react-redux';
import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as newPublicationActions from '@upload/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import {
  setHasToRefreshHome,
  setHasToRefreshProfile
} from '@core/store/refreshments/actions';
import Feather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';
import SimilarPublications from '@upload/components/SimilarPublications';
import styles from '@upload/views/ResponseView/styles';
import variables from '@app/styles/variables';

const ResponseView = ({
  clearPublicationValues,
  newPublication,
  refreshHome,
  refreshProfile
}) => {
  const {
    requestFailed,
    similarPublications,
    publicationType
  } = newPublication;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeWithSuccess = () => {
    clearPublicationValues();
    NavigationService.reset(0, 'Upload');
    refreshHome(true);
    refreshProfile(true);
    NavigationService.navigate('Home');
  };

  const closeWithFailures = () => {
    NavigationService.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      const functionToExecuteOnBack = requestFailed
        ? closeWithFailures
        : closeWithSuccess;
      functionToExecuteOnBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [closeWithSuccess, requestFailed]);

  const iconContainerStyle = requestFailed
    ? styles.errorContainer
    : styles.checkContainer;

  const icon = requestFailed ? (
    <IconAnt
      name="exclamation"
      size={70}
      color={variables.colors.backgroundRed}
    />
  ) : (
    <Feather name="check" size={70} color={variables.colors.backgroundGreen} />
  );
  const responseText = requestFailed
    ? 'Se produjo un error al cargar la publicación.'
    : 'Publicación cargada exitosamente.';

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
        <View style={styles.responseContainer}>
          <View style={styles.close}>
            <TouchableOpacity
              style={styles.icon}
              onPress={requestFailed ? closeWithFailures : closeWithSuccess}
            >
              <IconAnt
                name="close"
                size={30}
                color={variables.colors.backgroundDarkGrey}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.response}>
            <View style={iconContainerStyle}>{icon}</View>
            <Text style={styles.title}>{responseText}</Text>
          </View>
        </View>
        {!requestFailed &&
          Boolean(similarPublications.length) &&
          publicationType !== PUBLICATION_ENTITY.types.adoption && (
            <SimilarPublications
              publicationType={publicationType}
              publications={similarPublications}
            />
          )}
      </ImageBackground>
    </View>
  );
};

ResponseView.propTypes = {
  clearPublicationValues: PropTypes.func,
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
  clearPublicationValues: () => newPublicationActions.clearStore(),
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue),
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseView);
