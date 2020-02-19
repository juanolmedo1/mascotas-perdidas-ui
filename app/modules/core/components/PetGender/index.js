import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import styles from '@core/components/PetGender/styles';

const PetGender = ({ type, active = false }) => {
  const [selected, setSelected] = useState(active);
  const petGenderStyle = selected ? styles.selected : styles.notSelected;
  const iconColor = selected
    ? styles.selectedIcon.color
    : styles.notSelectedIcon.color;
  const genderTypes = {
    male: <IconIon name="ios-male" size={50} color={iconColor} />,
    female: <IconIon name="ios-female" size={50} color={iconColor} />,
    undefined: <IconAnt name="question" size={60} color={iconColor} />
  };

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const petGenderIcon = genderTypes[type];

  return (
    <TouchableOpacity
      style={petGenderStyle}
      onPress={toggleSelected}
      activeOpacity={0.8}
    >
      {petGenderIcon}
    </TouchableOpacity>
  );
};

PetGender.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['male', 'female', 'undefined']).isRequired
};

export default PetGender;
