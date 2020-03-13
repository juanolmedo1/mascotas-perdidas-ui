import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/SingleSelectPet/constants';
import PET_ENTITY from '@entities/Pet';
import PetIcon from '@core/components/PetIcon';
import styles from '@upload/components/SingleSelectPet/styles';

const SingleSelectPet = ({ petType, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.dog}
            updateSelection={onSelect}
            active={petType === PET_ENTITY.types.dog}
          />
          <Text style={styles.subtitle}>{LABELS.types.dog}</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.cat}
            updateSelection={onSelect}
            active={petType === PET_ENTITY.types.cat}
          />
          <Text style={styles.subtitle}>{LABELS.types.cat}</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type={PET_ENTITY.types.other}
            updateSelection={onSelect}
            active={petType === PET_ENTITY.types.other}
          />
          <Text style={styles.subtitle}>{LABELS.types.other}</Text>
        </View>
      </View>
    </View>
  );
};

SingleSelectPet.propTypes = {
  petType: PropTypes.oneOf([...Object.values(PET_ENTITY.types)]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SingleSelectPet;
