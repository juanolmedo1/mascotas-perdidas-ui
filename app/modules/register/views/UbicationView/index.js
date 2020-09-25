import { View, TouchableOpacity, Text } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@core/components/Button';
import styles from '@register/views/UbicationView/styles';
import NavigationService from '@core/utils/navigation';
import IconIon from 'react-native-vector-icons/Ionicons';
import variables from '@styles/variables';
import { LABELS } from '@register/views/UbicationView/constants';
import Dropdown from '@app/modules/core/components/Dropdown';
import LoadingView from '@core/views/LoadingView';
import { fetchLocations, fetchProvinces } from '@core/store/ubication/actions';
import { setProvince, setLocation } from '@register/store/actions';

const UbicationView = ({
  ubication,
  ubications,
  setUserProvince,
  setUserLocation,
  getProvinces,
  getLocations
}) => {
  const { province, location } = ubication;

  useEffect(() => {
    getProvinces();
    getLocations(province);
  }, [getLocations, getProvinces, province]);

  const updateProvince = value => {
    setUserProvince(value);
    getLocations(value);
    setUserLocation(locations[0].id);
  };

  const updateLocation = value => {
    setUserLocation(value);
  };
  const { provinces, locations } = ubications;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
          activeOpacity={0.8}
        >
          <IconIon
            name="md-arrow-back"
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{LABELS.title}</Text>
      {!provinces.length ? (
        <LoadingView />
      ) : (
        <View style={styles.inputsContainer}>
          <Dropdown
            data={provinces}
            changeValue={updateProvince}
            selectedValue={province}
            title={LABELS.dropdowns.province}
          />
          <Dropdown
            data={locations}
            changeValue={updateLocation}
            selectedValue={location}
            title={LABELS.dropdowns.location}
          />
          <View style={styles.buttonContainer}>
            <Button
              type="primary"
              rightArrow
              text="Continuar"
              onPress={() => NavigationService.navigate('UsernameView')}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = {
  getProvinces: fetchProvinces,
  getLocations: fetchLocations,
  setUserProvince: setProvince,
  setUserLocation: setLocation
};

const mapStateToProps = state => ({
  ubications: state.ubications,
  ubication: state.registration.ubication
});

export default connect(mapStateToProps, mapDispatchToProps)(UbicationView);
