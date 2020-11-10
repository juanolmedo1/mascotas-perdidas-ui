import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationResolvedView/MapView/constants';
import Divider from '@app/modules/core/components/Divider';
import IconIon from 'react-native-vector-icons/Ionicons';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@core/views/PublicationResolvedView/MapView/styles';
import UbicationSelector from '@core/components/UbicationSelector';
import variables from '@app/styles/variables';

const MapView = ({ route, ubications }) => {
  const { id } = route.params;
  const { latitude: userLatitude, longitude: userLongitude } = ubications;

  const onConfirmUbicationHandler = ubication => {
    NavigationService.navigate('PublicationResolved_Response', {
      id: id,
      lastLatitude: ubication.latitude,
      lastLongitude: ubication.longitude
    });
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
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
      <Divider />
      <View style={styles.introductionContainer}>
        <View style={styles.introductionIconContainer}>
          <MaterialCommunityIcons
            name={'lightbulb-on-outline'}
            size={30}
            color={variables.colors.backgroundOrange}
          />
        </View>
        <Text style={styles.introductionText}>
          {LABELS.ubicationInstructions}
        </Text>
      </View>
      <View style={styles.ubicationSelectorContainer}>
        <UbicationSelector
          startLatitude={userLatitude}
          startLongitude={userLongitude}
          startLatitudeDelta={0.05}
          startLongitudeDelta={0.05}
          onConfirmUbication={ubication => onConfirmUbicationHandler(ubication)}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  ubications: state.ubications
});

export default connect(mapStateToProps, null)(MapView);
