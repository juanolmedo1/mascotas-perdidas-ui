import { connect } from 'react-redux';
import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import NavigationService from '@core/utils/navigation';
import PET_ENTITY from '@entities/Pet';
import MultipleSelectGender from '@core/components/MultipleSelectGender';
import MultipleSelectPet from '@core/components/MultipleSelectPet';
import MultipleSelectPublication from '@core/components/MultipleSelectPublication';
import MultipleSelectSize from '@core/components/MultipleSelectSize';
import styles from '@home/views/FiltersView/styles';
import { fetchLocations, fetchProvinces } from '@core/store/ubication/actions';
import {
  fetchPublications,
  clearFilters,
  addPublicationType,
  removePublicationType,
  addPetType,
  removePetType,
  addGenderType,
  removeGenderType,
  addSizeType,
  removeSizeType
} from '@home/store/actions';
import { setCurrentLocation, setCurrentProvince } from '@login/store/actions';
import IconAnt from 'react-native-vector-icons/AntDesign';
import variables from '@app/styles/variables';
import { LABELS } from '@home/views/FiltersView/constants';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import Divider from '@app/modules/core/components/Divider';
import DialogSimple from '@core/components/DialogSimple';
import Dropdown from '@core/components/Dropdown';

const FiltersView = ({
  filters,
  getFilteredPublications,
  setProvince,
  setLocation,
  getProvinces,
  getLocations,
  ubications,
  clear,
  addPublication,
  removePublication,
  addPet,
  removePet,
  addGender,
  removeGender,
  addSize,
  removeSize,
  currentUbication
}) => {
  const { publicationType, petType, petGender, petSize, count } = filters;
  const { province, location } = currentUbication;

  useEffect(() => {
    getProvinces();
    getLocations(province);
  }, [getProvinces, getLocations, province]);

  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const updateProvince = value => {
    setProvince(value);
    getLocations(value);
  };

  const updateLocation = value => {
    setLocation(value);
  };

  const { provinces, locations } = ubications;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
          activeOpacity={0.8}
        >
          <IconAnt
            name="close"
            size={25}
            color={variables.colors.backgroundBlack}
          />
        </TouchableOpacity>
        <Text style={styles.title}>
          {LABELS.filterTitle} ({count})
        </Text>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={getFilteredPublications}
          activeOpacity={0.8}
        >
          <Text style={styles.applyText}>{LABELS.applyTitle}</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clear}
          activeOpacity={0.8}
        >
          <IconEvil
            name="trash"
            size={30}
            color={variables.colors.backgroundRed}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.changeUbicationButton}
          onPress={() => setShowDialog(true)}
          activeOpacity={0.8}
        >
          <IconEvil
            name="location"
            size={30}
            color={variables.colors.backgroundBlue}
          />
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={styles.block}>
        <MultipleSelectPublication
          publicationTypes={publicationType}
          addPublication={addPublication}
          removePublication={removePublication}
        />
      </View>
      <View style={styles.block}>
        <MultipleSelectPet
          petTypes={petType}
          addPet={addPet}
          removePet={removePet}
        />
      </View>
      <View style={styles.block}>
        <MultipleSelectGender
          petGenders={petGender}
          addGender={addGender}
          removeGender={removeGender}
        />
      </View>
      <View style={styles.block}>
        <MultipleSelectSize
          show={!petType.includes(PET_ENTITY.types.cat)}
          petSizes={petSize}
          addSize={addSize}
          removeSize={removeSize}
        />
      </View>
      <DialogSimple open={showDialog} toggleDialog={toggleDialog}>
        <View>
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
        </View>
      </DialogSimple>
    </ScrollView>
  );
};

FiltersView.propTypes = {
  filters: PropTypes.object.isRequired,
  getFilteredPublications: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  addPublication: PropTypes.func.isRequired,
  removePublication: PropTypes.func.isRequired,
  addPet: PropTypes.func.isRequired,
  removePet: PropTypes.func.isRequired,
  addGender: PropTypes.func.isRequired,
  removeGender: PropTypes.func.isRequired,
  addSize: PropTypes.func.isRequired,
  removeSize: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getFilteredPublications: fetchPublications,
  getLocations: fetchLocations,
  getProvinces: fetchProvinces,
  setProvince: setCurrentProvince,
  setLocation: setCurrentLocation,
  clear: clearFilters,
  addPublication: addPublicationType,
  removePublication: removePublicationType,
  addPet: addPetType,
  removePet: removePetType,
  addGender: addGenderType,
  removeGender: removeGenderType,
  addSize: addSizeType,
  removeSize: removeSizeType
};

const mapStateToProps = state => ({
  filters: state.publications.filters,
  ubications: state.ubications,
  currentUbication: state.session.currentUbication
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
