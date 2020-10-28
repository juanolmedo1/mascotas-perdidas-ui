import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import MapView, {
  Heatmap,
  Marker,
  Polygon,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import React, { useEffect } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import {
  LABELS,
  MAP_DELTA as mapDelta,
  OFFSET as offset
} from '@core/views/HeatmapPublicationsView/constants';
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
  const { id, publicationLatitude, publicationLongitude } = route.params;
  const {
    heatmapPublications,
    heatmapPublicationsRequestFailed,
    heatmapPublicationsRequestInProgress
  } = currentPublication;

  useEffect(() => {
    getHeatmapPublications({ publicationId: id, offset });
  }, [getHeatmapPublications, id]);

  const getPolygonPoints = () => {
    const rightTopCorner = {
      latitude: publicationLatitude + offset,
      longitude: publicationLongitude + offset
    };
    const rightBottomCorner = {
      latitude: publicationLatitude + offset,
      longitude: publicationLongitude - offset
    };
    const leftTopCorner = {
      latitude: publicationLatitude - offset,
      longitude: publicationLongitude + offset
    };
    const leftBottomCorner = {
      latitude: publicationLatitude - offset,
      longitude: publicationLongitude - offset
    };
    return [rightTopCorner, rightBottomCorner, leftBottomCorner, leftTopCorner];
  };

  const getHeatPoints = () => {
    return heatmapPublications
      ? heatmapPublications.map(heatmapPublication => ({
          latitude: heatmapPublication.ubication.lastLatitude,
          longitude: heatmapPublication.ubication.lastLongitude
        }))
      : [];
  };

  const renderContent = () => {
    if (heatmapPublicationsRequestInProgress) {
      return <LoadingView />;
    }
    const heatPoints = getHeatPoints();
    const hasHeatPoints = heatPoints.length > 0;
    if (heatmapPublicationsRequestFailed) {
      return (
        <View>
          <Text> Message fail</Text>
        </View>
      );
    }
    if (!hasHeatPoints) {
      return (
        <View>
          <Text>Message</Text>
        </View>
      );
    }
    return (
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
          <Heatmap radius={50} points={heatPoints} />
          <Polygon coordinates={getPolygonPoints()} />
          <Marker
            coordinate={{
              latitude: publicationLatitude,
              longitude: publicationLongitude
            }}
          />
        </MapView>
      </View>
    );
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
