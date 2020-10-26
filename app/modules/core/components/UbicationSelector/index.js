import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState } from 'react';

import { mapStylesJson } from '@app/styles/mapStylesJson';
import Button from '@core/components/Button';
import styles from '@core/components/UbicationSelector/styles';

const UbicationSelector = ({
  startLatitude,
  startLongitude,
  startLatitudeDelta,
  startLongitudeDelta,
  onConfirmUbication,
  buttonDisabled = false,
  buttonText = 'Confirmar ubicación'
}) => {
  const [ubication, setUbication] = useState({
    latitude: startLatitude,
    longitude: startLongitude
  });

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
        onPress={event => setUbication(event.nativeEvent.coordinate)}
      >
        <Marker
          draggable
          coordinate={{
            latitude: ubication.latitude,
            longitude: ubication.longitude
          }}
          onDragEnd={event => setUbication(event.nativeEvent.coordinate)}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          text={buttonText}
          disabled={buttonDisabled}
          onPress={() => onConfirmUbication(ubication)}
          type="primary"
        />
      </View>
    </View>
  );
};

export default UbicationSelector;
