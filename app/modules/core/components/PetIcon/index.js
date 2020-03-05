import { TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from '@core/components/PetIcon/styles';

const PetIcon = ({ type, updateSelection, active = false }) => {
  const petIconStyle = active ? styles.selected : styles.notSelected;
  const iconColor = active
    ? styles.selectedIcon.color
    : styles.notSelectedIcon.color;
  const petTypes = {
    DOG: <IconMCI name="dog" size={50} color={iconColor} />,
    CAT: <IconMCI name="cat" size={50} color={iconColor} />,
    OTHER: <IconMI name="pets" size={40} color={iconColor} />
  };

  const petIcon = petTypes[type];

  return (
    <TouchableOpacity
      style={petIconStyle}
      onPress={() => updateSelection(type)}
      activeOpacity={0.8}
    >
      {petIcon}
    </TouchableOpacity>
  );
};

PetIcon.propTypes = {
  active: PropTypes.bool,
  updateSelection: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['DOG', 'CAT', 'OTHER']).isRequired
};

export default PetIcon;
