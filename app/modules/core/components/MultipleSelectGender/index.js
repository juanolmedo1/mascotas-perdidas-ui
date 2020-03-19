import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { LABELS } from '@core/components/MultipleSelectGender/constants';
import PetGender from '@core/components/PetGender';
import PET_ENTITY from '@entities/Pet';
import styles from '@core/components/MultipleSelectGender/styles';

const MultipleSelectGender = ({ petGenders, addGender, removeGender }) => {
  const updateSelection = value => {
    if (petGenders.includes(value)) {
      removeGender(value);
    } else {
      addGender(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.male}
            updateSelection={updateSelection}
            active={petGenders.includes(PET_ENTITY.genders.male)}
          />
          <Text style={styles.subtitle}>{LABELS.genders.male}</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.female}
            updateSelection={updateSelection}
            active={petGenders.includes(PET_ENTITY.genders.female)}
          />
          <Text style={styles.subtitle}>{LABELS.genders.female}</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.undefined}
            updateSelection={updateSelection}
            active={petGenders.includes(PET_ENTITY.genders.undefined)}
          />
          <Text style={styles.subtitle}>{LABELS.genders.undefined}</Text>
        </View>
      </View>
    </View>
  );
};

MultipleSelectGender.propTypes = {
  petGenders: PropTypes.arrayOf(PropTypes.string).isRequired,
  addGender: PropTypes.func.isRequired,
  removeGender: PropTypes.func.isRequired
};

export default MultipleSelectGender;
