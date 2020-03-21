import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { LABELS } from '@core/components/MultipleSelectPet/constants';
import PET_ENTITY from '@entities/Pet';
import PetIcon from '@core/components/PetIcon';
import styles from '@core/components/MultipleSelectPet/styles';

const MultipleSelectPet = ({ petTypes, addPet, removePet }) => {
  const updateSelection = value => {
    if (petTypes.includes(value)) {
      removePet(value);
    } else {
      addPet(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.dog}
            updateSelection={updateSelection}
            active={petTypes.includes(PET_ENTITY.types.dog)}
          />
          <Text style={styles.subtitle}>{LABELS.types.dog}</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.cat}
            updateSelection={updateSelection}
            active={petTypes.includes(PET_ENTITY.types.cat)}
          />
          <Text style={styles.subtitle}>{LABELS.types.cat}</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.other}
            updateSelection={updateSelection}
            active={petTypes.includes(PET_ENTITY.types.other)}
          />
          <Text style={styles.subtitle}>{LABELS.types.other}</Text>
        </View>
      </View>
    </View>
  );
};

MultipleSelectPet.propTypes = {
  petTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPet: PropTypes.func.isRequired,
  removePet: PropTypes.func.isRequired
};

export default MultipleSelectPet;
