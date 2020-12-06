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
import { mapStylesJson } from '@app/styles/mapStylesJson';
import { setHasToRefreshHome } from '@core/store/refreshments/actions';
import {
  setUbicationFailure,
  setUbicationSuccess
} from '@app/modules/core/store/ubication/actions';
import Divider from '@core/components/Divider';
import HomeViewToggler from '@home/components/HomeViewToggler';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationIcon from '@core/components/PublicationIcon';
import PublicationsList from '@core/components/PublicationsList';
import Octicons from 'react-native-vector-icons/Octicons';
import variables from '@app/styles/variables';
import styles from '@home/views/HomeView/styles';
import messaging from '@react-native-firebase/messaging';
import { saveNotificationToken } from '@login/store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLoadingView from '@home/views/HomeLoadingView';
import { LABELS } from '@home/views/HomeView/constants';
import MapLoadingView from '@home/views/MapLoadingView';

const HomeView = ({
  getPublications,
  publications,
  refreshments,
  refreshHome,
  setUbication,
  setUbicationFail,
  saveToken,
  ubications,
  session,
  setNewPublication
}) => {
  const [mapView, setMapView] = useState(false);
  const { id } = session.profileInfo;

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

  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    return fcmToken;
  };

  useEffect(() => {
    async function saveUserToken() {
      const token = await getToken();
      saveToken({ id, token });
    }
    saveUserToken();
  }, [id, saveToken]);

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUbication({
          latitude,
          longitude
        });
        getPublications();
      },
      error => {
        setUbicationFail({ error });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [getPublications, setNewPublication, setUbication, setUbicationFail]);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshments.hasToRefreshHome) {
        setMapView(false);
        getPublications();
        refreshHome(false);
      }
    }, [getPublications, refreshHome, refreshments.hasToRefreshHome])
  );

  const refresh = () => {
    getPublications();
  };

  const { requestFailed, requestInProgress, data } = publications;

  const publicationListNotEmpty = data && data.length;
  let ubicationText;
  if (publicationListNotEmpty) {
    const country = data[0].ubication.country;
    const adminArea1 = data[0].ubication.administrativeAreaLevel1;
    const locality = data[0].ubication.locality;
    ubicationText = `${locality} | ${adminArea1} | ${country}`;
  }

  const UbicationComponent = () => (
    <View style={styles.ubicationTextContainer}>
      <Text style={styles.ubicationText}>{ubicationText}</Text>
    </View>
  );

  const renderHomeSkeletonView = () => <HomeLoadingView />;
  const renderEmptyList = () => (
    <>
      <UbicationComponent />
      <View style={styles.emptyList}>
        <Text style={styles.noPublications}>{LABELS.no_publications}</Text>
      </View>
    </>
  );
  const renderHomeList = () => (
    <>
      <UbicationComponent />
      <PublicationsList
        data={data}
        refreshControlProps={{
          refreshing: requestInProgress,
          onRefresh: refresh
        }}
      />
    </>
  );

  const renderList = () => {
    return !data || !ubications.latitude || !ubications.longitude
      ? renderHomeSkeletonView()
      : data.length
      ? renderHomeList()
      : renderEmptyList();
  };

  const renderPublications = () => {
    return (
      data &&
      data.map(publication => (
        <Marker
          coordinate={{
            latitude: publication.ubication.firstLatitude,
            longitude: publication.ubication.firstLongitude
          }}
          key={publication.id}
        >
          <PublicationIcon type={publication.type} />
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
      ))
    );
  };

  const renderMap = () => {
    return publicationListNotEmpty &&
      ubications.latitude &&
      ubications.longitude ? (
      <View style={styles.mapContainer}>
        <UbicationComponent />
        <MapView
          customMapStyle={mapStylesJson}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: ubications.latitude,
            longitude: ubications.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
        >
          <Marker
            coordinate={{
              latitude: ubications.latitude,
              longitude: ubications.longitude
            }}
          />
          {renderPublications()}
        </MapView>
      </View>
    ) : (
      <MapLoadingView />
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

        {!mapView && <Divider />}
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
  setUbication: setUbicationSuccess,
  setUbicationFail: setUbicationFailure,
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue),
  saveToken: saveNotificationToken
};

const mapStateToProps = state => ({
  ubications: state.ubications,
  publications: state.publications,
  refreshments: state.refreshments,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
