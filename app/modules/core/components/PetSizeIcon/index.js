import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PetSizeIcon/styles';
import variables from '@app/styles/variables';
import { LABELS } from '@core/components/PetSizeIcon/constants';
import PET_ENTITY from '@entities/Pet';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PetSizeIcon = ({ size }) => {
  const petSizes = {
    VERY_SMALL: 20,
    SMALL: 30,
    MEDIUM: 37,
    LARGE: 45
  };

  const iconSize = petSizes[size];
  const petSizeText = LABELS.size[size];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconContainer}>
        <IconAwesome5
          name="dog"
          size={iconSize}
          style={styles.icon}
          color={variables.colors.backgroundOrange}
        />
      </View>
      <Text style={styles.value}>{petSizeText}</Text>
    </View>
  );
};

PetSizeIcon.propTypes = {
  size: PropTypes.oneOf([...Object.values(PET_ENTITY.sizes)]).isRequired
};

export default PetSizeIcon;
