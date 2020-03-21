import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/ColorSelector/constants';
import ColorSection from '@upload/components/ColorSection';
import PET_ENTITY from '@entities/Pet';
import styles from '@upload/components/ColorSelector/styles';

const ColorSelector = ({ extractedColors, onSelect, selectedColors }) => {
  const commonColors = [...Object.values(PET_ENTITY.colors.normal)];
  const otherColors = [...Object.values(PET_ENTITY.colors.others)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <Text style={styles.subtitle}>{LABELS.subtitle}</Text>
      <ColorSection
        sectionColors={extractedColors}
        colorsDescription={LABELS.descriptions.extracted}
        selectedColors={selectedColors}
        onSelectColor={onSelect}
      />
      <ColorSection
        sectionColors={commonColors}
        colorsDescription={LABELS.descriptions.commons}
        selectedColors={selectedColors}
        onSelectColor={onSelect}
      />
      <ColorSection
        sectionColors={otherColors}
        colorsDescription={LABELS.descriptions.others}
        selectedColors={selectedColors}
        onSelectColor={onSelect}
      />
    </View>
  );
};

ColorSelector.propTypes = {
  extractedColors: PropTypes.array,
  onSelect: PropTypes.func,
  selectedColors: PropTypes.array
};

export default ColorSelector;
