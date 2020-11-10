import { connect } from 'react-redux';
import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useEffect } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationResolvedView/ResponseView/constants';
import {
  setHasToRefreshHome,
  setHasToRefreshProfile
} from '@core/store/refreshments/actions';
import Feather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@core/views/PublicationResolvedView/ResponseView/styles';
import variables from '@app/styles/variables';

const ResponseView = ({
  currentPublication,
  deactivatePublication,
  refreshHome,
  refreshProfile,
  route,
  updatePublication
}) => {
  const {
    updatedPublication,
    updatePublicationInProgress,
    updatePublicationFailed
  } = currentPublication;
  const { id, lastLatitude, lastLongitude, notifyPublicationId } = route.params;

  useEffect(() => {
    if (notifyPublicationId) {
      deactivatePublication({
        publicationId: id,
        notifyPublicationId: notifyPublicationId
      });
    } else {
      const updateValues =
        lastLatitude && lastLongitude
          ? {
              id: id,
              lastLatitude: lastLatitude,
              lastLongitude: lastLongitude,
              isActive: false
            }
          : { id: id, isActive: false };
      updatePublication(updateValues);
    }
  }, [
    deactivatePublication,
    id,
    lastLatitude,
    lastLongitude,
    notifyPublicationId,
    updatePublication
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeWithSuccess = () => {
    NavigationService.reset(0, 'Publication');
    refreshHome(true);
    refreshProfile(true);
    NavigationService.navigate('Home');
  };

  const closeWithFailures = () => {
    NavigationService.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      const functionToExecuteOnBack = updatePublicationFailed
        ? closeWithFailures
        : closeWithSuccess;
      functionToExecuteOnBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [closeWithSuccess, updatePublicationFailed]);

  const renderResponseContent = () => {
    const successUpdate = updatedPublication && !updatePublicationFailed;
    const iconContainerStyle = successUpdate
      ? styles.checkContainer
      : styles.errorContainer;
    const icon = successUpdate ? (
      <Feather
        name="check"
        size={70}
        color={variables.colors.backgroundGreen}
      />
    ) : (
      <IconAnt
        name="exclamation"
        size={70}
        color={variables.colors.backgroundRed}
      />
    );
    const responseText = successUpdate ? LABELS.successText : LABELS.errorText;
    return (
      <View style={styles.responseContainer}>
        <View style={styles.close}>
          <TouchableOpacity
            style={styles.icon}
            onPress={successUpdate ? closeWithSuccess : closeWithFailures}
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
    );
  };
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      {updatePublicationInProgress ? <LoadingView /> : renderResponseContent()}
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  deactivatePublication: currentPublicationActions.deactivatePublication,
  updatePublication: currentPublicationActions.updatePublication,
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue),
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue)
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseView);
