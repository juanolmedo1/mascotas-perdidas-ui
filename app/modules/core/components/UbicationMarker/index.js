import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';

import { mapStylesJson } from '@app/styles/mapStylesJson';
import styles from '@core/components/UbicationMarker/styles';

const UbicationMarker = ({
  startLatitude,
  startLongitude,
  startLatitudeDelta,
  startLongitudeDelta
}) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        customMapStyle={mapStylesJson}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: startLatitude,
          longitude: startLongitude,
          latitudeDelta: startLatitudeDelta,
          longitudeDelta: startLongitudeDelta
        }}
      >
        <Marker
          coordinate={{
            latitude: startLatitude,
            longitude: startLongitude
          }}
        />
      </MapView>
    </View>
  );
};

export default UbicationMarker;
