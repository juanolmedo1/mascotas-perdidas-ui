import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from '@core/components/PetIcon/styles';

const PetIcon = ({ type, active = false }) => {
  const [selected, setSelected] = useState(active);
  const petIconStyle = selected ? styles.selected : styles.notSelected;
  const iconColor = selected
    ? styles.selectedIcon.color
    : styles.notSelectedIcon.color;
  const petTypes = {
    dog: <IconMCI name="dog" size={60} color={iconColor} />,
    cat: <IconMCI name="cat" size={60} color={iconColor} />,
    other: <IconMI name="pets" size={50} color={iconColor} />
  };

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const petIcon = petTypes[type];

  return (
    <TouchableOpacity
      style={petIconStyle}
      onPress={toggleSelected}
      activeOpacity={0.8}
    >
      {petIcon}
    </TouchableOpacity>
  );
};

PetIcon.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['dog', 'cat', 'other']).isRequired
};

export default PetIcon;
