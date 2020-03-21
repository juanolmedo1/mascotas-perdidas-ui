import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Color from '@upload/components/Color';
import styles from '@upload/components/ColorSection/styles';

const ColorSection = ({
  colorsDescription,
  sectionColors,
  selectedColors,
  onSelectColor
}) => {
  const isSelected = color => selectedColors.includes(color);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{colorsDescription}</Text>
      <View style={styles.colorsContainer}>
        {sectionColors.map(hexaColor => (
          <Color
            key={hexaColor}
            color={hexaColor}
            onSelect={onSelectColor}
            isSelected={isSelected(hexaColor)}
          />
        ))}
      </View>
    </View>
  );
};

ColorSection.propTypes = {
  colorsDescription: PropTypes.string,
  sectionColors: PropTypes.array,
  onSelectColor: PropTypes.func
};

export default ColorSection;
