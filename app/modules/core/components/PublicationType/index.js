import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationType/styles';
import variables from '@styles/variables';

const PublicationType = ({
  type,
  active = false,
  primaryColor,
  updateSelection
}) => {
  const publicationTypes = {
    LOST: 'P',
    FOUND: 'E',
    ADOPTION: 'A'
  };

  const publicationTypeText = publicationTypes[type];

  const additionalContainerStyle = active
    ? { borderColor: primaryColor, backgroundColor: primaryColor }
    : { borderColor: primaryColor };

  const additionalTextStyle = active
    ? { color: variables.colors.textWhite }
    : { color: primaryColor };

  return (
    <TouchableOpacity
      style={[styles.container, additionalContainerStyle]}
      onPress={() => updateSelection(type)}
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
  updateSelection: PropTypes.func.isRequired,
  primaryColor: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION']).isRequired
};

export default PublicationType;
