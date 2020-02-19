import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationIcon/styles';

const PublicationIcon = ({ type }) => {
  const iconsText = {
    lost: 'P',
    found: 'E',
    adoption: 'A'
  };

  const iconsStyle = {
    lost: styles.lost,
    found: styles.found,
    adoption: styles.adoption
  };

  const publicationIconText = iconsText[type];
  const publicationIconStyle = iconsStyle[type];

  return (
    <View style={publicationIconStyle}>
      <Text style={styles.text}>{publicationIconText}</Text>
    </View>
  );
};

PublicationIcon.propTypes = {
  type: PropTypes.oneOf(['lost', 'found', 'adoption']).isRequired
};

export default PublicationIcon;
