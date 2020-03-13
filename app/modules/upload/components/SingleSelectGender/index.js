import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/SingleSelectGender/constants';
import PetGender from '@core/components/PetGender';
import PET_ENTITY from '@entities/Pet';
import styles from '@upload/components/SingleSelectGender/styles';

const SingleSelectGender = ({ petGender, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.male}
            updateSelection={onSelect}
            active={petGender === PET_ENTITY.genders.male}
          />
          <Text style={styles.subtitle}>{LABELS.genders.male}</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.female}
            updateSelection={onSelect}
            active={petGender === PET_ENTITY.genders.female}
          />
          <Text style={styles.subtitle}>{LABELS.genders.female}</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type={PET_ENTITY.genders.undefined}
            updateSelection={onSelect}
            active={petGender === PET_ENTITY.genders.undefined}
          />
          <Text style={styles.subtitle}>{LABELS.genders.undefined}</Text>
        </View>
      </View>
    </View>
  );
};

SingleSelectGender.propTypes = {
  petGender: PropTypes.oneOf([...Object.values(PET_ENTITY.genders)]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SingleSelectGender;
