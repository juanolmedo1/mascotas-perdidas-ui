import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '@upload/components/Color/styles';

const Color = ({ color, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onSelect(color)}
      style={isSelected ? styles.colorContainerSelected : styles.colorContainer}
    >
      <View style={{ ...styles.color, backgroundColor: color }} />
    </TouchableOpacity>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Color;
