import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {
  Heatmap,
  Marker,
  Polygon,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import React, { useEffect, useState } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { mapStylesJson } from '@notifications/views/NotificationsView/mapStylesJson';
import { LABELS } from '@notifications/views/NotificationsView/constants';
import Divider from '@app/modules/core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@notifications/views/NotificationsView/styles';

const NotificationsView = () => {
  const [location, setLocation] = useState(undefined);
  if (location) {
    console.log('Current location', location.latitude, location.longitude);
  }

  const polygonLocations = () => {
    const rightTopCorner = {
      latitude: location.latitude + 0.01,
      longitude: location.longitude + 0.01
    };
    const rightBottomCorner = {
      latitude: location.latitude - 0.01,
      longitude: location.longitude + 0.01
    };
    const leftTopCorner = {
      latitude: location.latitude + 0.01,
      longitude: location.longitude - 0.01
    };
    const leftBottomCorner = {
      latitude: location.latitude - 0.01,
      longitude: location.longitude - 0.01
    };
    return [leftTopCorner, rightTopCorner, rightBottomCorner, leftBottomCorner];
  };

  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse'
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  }

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const mapStyles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    map: {
      ...StyleSheet.absoluteFillObject
    }
  });

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <Divider />
        <View style={styles.content}>
          <Text style={styles.contentText}>{LABELS.no_notifications}</Text>
        </View>
      </View>
      {location ? (
        <View style={mapStyles.container}>
          <MapView
            customMapStyle={mapStylesJson}
            provider={PROVIDER_GOOGLE}
            style={mapStyles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            onPress={event =>
              setLocation({
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude
              })
            }
          >
            <Polygon
              coordinates={polygonLocations()}
              fillColor={'rgba(251,141,38,0.5)'}
            />
            <Heatmap points={polygonLocations()} radius={50} />
            <Marker
              draggable
              onDragEnd={event =>
                setLocation({
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude
                })
              }
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
              }}
            >
              {/*<View style={{ backgroundColor: 'red', padding: 10 }}>
                <Text>SF</Text>
            </View>*/}
            </Marker>
          </MapView>
        </View>
      ) : (
        <LoadingView />
      )}
    </ImageBackground>
  );
};

export default NotificationsView;
