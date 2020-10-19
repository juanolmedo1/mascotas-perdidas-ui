import { connect } from 'react-redux';
import {
  Image,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { fetchPublications } from '@home/store/actions';
import { mapStylesJson } from '@home/views/HomeView/mapStylesJson';
import { setHasToRefreshHome } from '@core/store/refreshments/actions';
import Divider from '@core/components/Divider';
import HomeViewToggler from '@home/components/HomeViewToggler';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationIcon from '@core/components/PublicationIcon';
import PublicationsList from '@core/components/PublicationsList';
import Octicons from 'react-native-vector-icons/Octicons';
import variables from '@app/styles/variables';
import styles from '@home/views/HomeView/styles';

const HomeView = ({
  getPublications,
  publications,
  refreshments,
  refreshHome
}) => {
  const [location, setLocation] = useState(undefined);
  const [mapView, setMapView] = useState(false);

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

  useEffect(() => {
    getPublications();
  }, [getPublications]);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshments.hasToRefreshHome) {
        getPublications();
        refreshHome(false);
      }
    }, [getPublications, refreshHome, refreshments.hasToRefreshHome])
  );

  const refresh = () => {
    getPublications();
  };

  const { requestFailed, requestInProgress, data } = publications;

  const renderList = () => {
    return requestInProgress ? (
      <LoadingView />
    ) : (
      <PublicationsList
        data={data}
        refreshControlProps={{
          refreshing: requestInProgress,
          onRefresh: refresh
        }}
      />
    );
  };

  const renderPublications = () => {
    return data.map(publication => (
      <Marker
        coordinate={{
          latitude: publication.latitude,
          longitude: publication.longitude
        }}
      >
        <View style={styles.markerContainer}>
          <PublicationIcon type={publication.type} />
        </View>
        <Callout
          style={styles.callout}
          tooltip={true}
          onPress={() =>
            NavigationService.navigate('Publication', {
              id: publication.id
            })
          }
        >
          <Text style={styles.calloutText}>
            <Image
              style={styles.calloutImage}
              source={{ uri: publication.pet.photos[0].data }}
            />
          </Text>
        </Callout>
      </Marker>
    ));
  };

  const renderMap = () => {
    return location ? (
      <View style={styles.mapContainer}>
        <MapView
          customMapStyle={mapStylesJson}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
          />
          {renderPublications()}
        </MapView>
      </View>
    ) : (
      <LoadingView />
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
          <Text style={styles.title}>Inicio</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('Filters')}
            >
              <Octicons
                name="settings"
                size={28}
                color={variables.colors.backgroundBlack}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider />
        <HomeViewToggler
          mapViewActive={mapView}
          onListViewSelected={() => setMapView(false)}
          onMapViewSelected={() => setMapView(true)}
        />
        {mapView ? renderMap() : renderList()}
      </ImageBackground>
    </View>
  );
};

HomeView.propTypes = {
  getPublications: PropTypes.func.isRequired,
  publications: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    data: PropTypes.array
  }).isRequired
};

const mapDispatchToProps = {
  getPublications: fetchPublications,
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue)
};

const mapStateToProps = state => ({
  publications: state.publications,
  refreshments: state.refreshments
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
