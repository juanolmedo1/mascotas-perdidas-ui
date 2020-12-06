import { connect } from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  addGenderType,
  addPetType,
  addPublicationType,
  addSizeType,
  clearFilters,
  fetchPublications,
  removeGenderType,
  removePetType,
  removePublicationType,
  removeSizeType
} from '@home/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@home/views/FiltersView/constants';
import { setUbicationSuccess } from '@core/store/ubication/actions';
import Divider from '@app/modules/core/components/Divider';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import NavigationService from '@core/utils/navigation';
import MultipleSelectGender from '@core/components/MultipleSelectGender';
import MultipleSelectPet from '@core/components/MultipleSelectPet';
import MultipleSelectPublication from '@core/components/MultipleSelectPublication';
import MultipleSelectSize from '@core/components/MultipleSelectSize';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PET_ENTITY from '@entities/Pet';
import styles from '@home/views/FiltersView/styles';
import UbicationSelector from '@core/components/UbicationSelector';
import variables from '@app/styles/variables';

const FiltersView = ({
  addGender,
  addPet,
  addPublication,
  addSize,
  clear,
  filters,
  getFilteredPublications,
  removeGender,
  removePet,
  removePublication,
  removeSize,
  setUbication,
  ubications
}) => {
  const { publicationType, petType, petGender, petSize, count } = filters;
  const { latitude, longitude } = ubications;
  const [showUbicationSelector, setShowUbicationSelector] = useState(false);

  const onConfirmUbicationHandler = ubication => {
    setShowUbicationSelector(false);
    setUbication(ubication);
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {showUbicationSelector ? (
          <View style={styles.ubicationSelectorContainer}>
            <UbicationSelector
              startLatitude={latitude}
              startLongitude={longitude}
              startLatitudeDelta={1}
              startLongitudeDelta={1}
              onConfirmUbication={ubication =>
                onConfirmUbicationHandler(ubication)
              }
            />
          </View>
        ) : null}
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
              style={styles.buttonIcon}
              color={variables.colors.backgroundWhite}
            />
            <Text style={styles.buttonText}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.changeUbicationButton}
            onPress={() => setShowUbicationSelector(true)}
            activeOpacity={0.8}
          >
            <IconEvil
              name="location"
              size={30}
              style={styles.buttonIcon}
              color={variables.colors.backgroundWhite}
            />
            <Text style={styles.buttonText}>Ubicación</Text>
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
      </ScrollView>
    </ImageBackground>
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
  addGender: addGenderType,
  addPet: addPetType,
  addPublication: addPublicationType,
  addSize: addSizeType,
  clear: clearFilters,
  getFilteredPublications: fetchPublications,
  removeGender: removeGenderType,
  removePet: removePetType,
  removePublication: removePublicationType,
  removeSize: removeSizeType,
  setUbication: setUbicationSuccess
};

const mapStateToProps = state => ({
  filters: state.publications.filters,
  ubications: state.ubications
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
