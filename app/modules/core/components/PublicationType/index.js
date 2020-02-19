import { TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationType/styles';
import variables from '@styles/variables';

const PublicationType = ({ type, active = false, primaryColor }) => {
  const [selected, setSelected] = useState(active);
  const publicationTypes = {
    lost: 'P',
    found: 'E',
    adoption: 'A'
  };

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const publicationTypeText = publicationTypes[type];

  const additionalContainerStyle = selected
    ? { borderColor: primaryColor, backgroundColor: primaryColor }
    : { borderColor: primaryColor };

  const additionalTextStyle = selected
    ? { color: variables.colors.textWhite }
    : { color: primaryColor };

  return (
    <TouchableOpacity
      style={[styles.container, additionalContainerStyle]}
      onPress={toggleSelected}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, additionalTextStyle]}>
        {publicationTypeText}
      </Text>
    </TouchableOpacity>
  );
};

PublicationType.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['lost', 'found', 'adoption']).isRequired
};

export default PublicationType;
