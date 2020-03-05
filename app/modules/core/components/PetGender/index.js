import { TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import styles from '@core/components/PetGender/styles';

const PetGender = ({ type, updateSelection, active = false }) => {
  const petGenderStyle = active ? styles.selected : styles.notSelected;
  const iconColor = active
    ? styles.selectedIcon.color
    : styles.notSelectedIcon.color;
  const genderTypes = {
    MALE: <IconIon name="ios-male" size={40} color={iconColor} />,
    FEMALE: <IconIon name="ios-female" size={40} color={iconColor} />,
    UNDEFINED: <IconAnt name="question" size={50} color={iconColor} />
  };

  const petGenderIcon = genderTypes[type];

  return (
    <TouchableOpacity
      style={petGenderStyle}
      onPress={() => updateSelection(type)}
      activeOpacity={0.8}
    >
      {petGenderIcon}
    </TouchableOpacity>
  );
};

PetGender.propTypes = {
  active: PropTypes.bool,
  updateSelection: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['MALE', 'FEMALE', 'UNDEFINED']).isRequired
};

export default PetGender;
