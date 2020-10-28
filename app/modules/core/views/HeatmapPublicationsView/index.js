import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {
  Circle,
  Heatmap,
  Marker,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import React, { useEffect } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import {
  CIRCLE as circleProperties,
  HEATMAP as heatmapProperties,
  LABELS,
  MAP_DELTA as mapDelta,
  OFFSET as offset
} from '@core/views/HeatmapPublicationsView/constants';
import DialogSimple from '@core/components/DialogSimple';
import { mapStylesJson } from '@app/styles/mapStylesJson';
import Divider from '@core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@core/views/HeatmapPublicationsView/styles';
import variables from '@app/styles/variables';

const HeatmapPublicationsView = ({
  currentPublication,
  getHeatmapPublications,
  route
}) => {
  const {
    id,
    petType,
    publicationLatitude,
    publicationLongitude
  } = route.params;
  const {
    heatmapPublications,
    heatmapPublicationsRequestFailed,
    heatmapPublicationsRequestInProgress
  } = currentPublication;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getHeatmapPublications({ publicationId: id, offset });
    }
    return () => {
      isMounted = false;
    };
  }, [getHeatmapPublications, id]);

  const getHeatPoints = () => {
    return heatmapPublications
      ? heatmapPublications.map(heatmapPublication => ({
          latitude: heatmapPublication.ubication.lastLatitude,
          longitude: heatmapPublication.ubication.lastLongitude
        }))
      : [];
  };

  const renderRequestFailedDialog = () => {
    return (
      <DialogSimple
        open={heatmapPublicationsRequestFailed}
        toggleDialog={() => NavigationService.goBack()}
        onBackdropPress={() => NavigationService.goBack()}
        onBackButtonPress={() => NavigationService.goBack()}
      >
        <View style={styles.contentContainer}>
          <View style={[styles.iconContainer, styles.iconBorderFail]}>
            <IconAnt
              name={'exclamation'}
              size={50}
              color={variables.colors.backgroundRed}
            />
          </View>
          <Text style={styles.dialogText}>{LABELS.requestFailed}</Text>
        </View>
      </DialogSimple>
    );
  };

  const renderNoInformationDialog = () => {
    return (
      <DialogSimple
        open={heatmapPublications.length === 0}
        toggleDialog={() => NavigationService.goBack()}
        onBackdropPress={() => NavigationService.goBack()}
        onBackButtonPress={() => NavigationService.goBack()}
      >
        <View style={styles.contentContainer}>
          <View style={[styles.iconContainer, styles.iconBorderWarning]}>
            <IconAnt
              name={'frowno'}
              size={50}
              color={variables.colors.backgroundOrange}
            />
          </View>
          <Text style={styles.dialogText}>{LABELS.noInformation}</Text>
        </View>
      </DialogSimple>
    );
  };

  const renderContent = () => {
    if (heatmapPublicationsRequestInProgress) {
      return <LoadingView />;
    }
    const heatPoints = getHeatPoints();
    const hasHeatPoints = heatPoints.length > 0;
    return !heatmapPublicationsRequestFailed && hasHeatPoints ? (
      <>
        <View style={styles.introductionContainer}>
          <View style={styles.introductionIconContainer}>
            <MaterialCommunityIcons
              name={'lightbulb-on-outline'}
              size={35}
              color={variables.colors.backgroundOrange}
            />
          </View>
          <Text style={styles.introductionText}>
            {LABELS.introductionText(petType)}
          </Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            customMapStyle={mapStylesJson}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: publicationLatitude,
              longitude: publicationLongitude,
              latitudeDelta: mapDelta,
              longitudeDelta: mapDelta
            }}
          >
            <Heatmap
              radius={heatmapProperties.radius}
              points={heatPoints}
              gradient={heatmapProperties.gradientOptions}
            />
            <Circle
              center={{
                latitude: publicationLatitude,
                longitude: publicationLongitude
              }}
              fillColor={circleProperties.fillColor}
              strokeColor={variables.colors.backgroundDarkOrange}
              radius={circleProperties.radius}
            />
            <Marker
              coordinate={{
                latitude: publicationLatitude,
                longitude: publicationLongitude
              }}
            />
          </MapView>
        </View>
      </>
    ) : null;
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>{LABELS.headerTitle}</Text>
        </View>
        <Divider />
        {renderContent()}
        {heatmapPublications ? renderNoInformationDialog() : null}
        {heatmapPublicationsRequestFailed ? renderRequestFailedDialog() : null}
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = {
  getHeatmapPublications: ({ publicationId, offset }) =>
    currentPublicationActions.getHeatmapPublications({ publicationId, offset })
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatmapPublicationsView);
