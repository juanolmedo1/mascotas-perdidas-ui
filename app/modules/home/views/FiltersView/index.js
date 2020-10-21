import { connect } from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

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
import variables from '@app/styles/variables';

const FiltersView = ({
  filters,
  getFilteredPublications,
  ubications,
  clear,
  addPublication,
  removePublication,
  addPet,
  removePet,
  addGender,
  removeGender,
  addSize,
  removeSize
}) => {
  const { publicationType, petType, petGender, petSize, count } = filters;
  const { latitude, longitude } = ubications;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
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
            onPress={() =>
              console.log('MOSTRAR MAPA CON ', latitude, longitude)
            }
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
      </ImageBackground>
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
  ubications: state.ubications
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
