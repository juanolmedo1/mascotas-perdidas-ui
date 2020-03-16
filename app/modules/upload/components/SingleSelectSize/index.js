import { View, Text, TouchableOpacity } from 'react-native';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React from 'react';

import {
  LABELS,
  UI_CONSTANTS
} from '@upload/components/SingleSelectSize/constants';
import PET_ENTITY from '@entities/Pet';
import styles from '@upload/components/SingleSelectSize/styles';
import variables from '@styles/variables';

const SingleSelectSize = ({ show, petSize, onSelect }) => {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => onSelect(PET_ENTITY.sizes.verySmall)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.verySmall}
            style={styles.icon}
            color={
              petSize === PET_ENTITY.sizes.verySmall
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => onSelect(PET_ENTITY.sizes.small)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.small}
            style={styles.icon}
            color={
              petSize === PET_ENTITY.sizes.small
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => onSelect(PET_ENTITY.sizes.medium)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.medium}
            style={styles.icon}
            color={
              petSize === PET_ENTITY.sizes.medium
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => onSelect(PET_ENTITY.sizes.large)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.large}
            style={styles.icon}
            color={
              petSize === PET_ENTITY.sizes.large
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

SingleSelectSize.propTypes = {
  petSize: PropTypes.oneOf([...Object.values(PET_ENTITY.sizes)]).isRequired,
  onSelect: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default SingleSelectSize;
