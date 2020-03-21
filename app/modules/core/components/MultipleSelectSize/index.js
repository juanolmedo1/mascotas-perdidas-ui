import { View, Text, TouchableOpacity } from 'react-native';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React from 'react';
import {
  LABELS,
  UI_CONSTANTS
} from '@core/components/MultipleSelectSize/constants';
import PET_ENTITY from '@entities/Pet';
import styles from '@core/components/MultipleSelectSize/styles';
import variables from '@styles/variables';

const MultipleSelectSize = ({ show, petSizes, addSize, removeSize }) => {
  if (!show) {
    return null;
  }

  const updateSelection = value => {
    if (petSizes.includes(value)) {
      removeSize(value);
    } else {
      addSize(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection(PET_ENTITY.sizes.verySmall)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.verySmall}
            style={styles.icon}
            color={
              petSizes.includes(PET_ENTITY.sizes.verySmall)
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection(PET_ENTITY.sizes.small)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.small}
            style={styles.icon}
            color={
              petSizes.includes(PET_ENTITY.sizes.small)
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection(PET_ENTITY.sizes.medium)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.medium}
            style={styles.icon}
            color={
              petSizes.includes(PET_ENTITY.sizes.medium)
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection(PET_ENTITY.sizes.large)}
          activeOpacity={UI_CONSTANTS.opacity}
        >
          <IconAwesome5
            name="dog"
            size={UI_CONSTANTS.iconSizes.large}
            style={styles.icon}
            color={
              petSizes.includes(PET_ENTITY.sizes.large)
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

MultipleSelectSize.propTypes = {
  petSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  addSize: PropTypes.func.isRequired,
  removeSize: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default MultipleSelectSize;
