import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationIcon/styles';

const PublicationIcon = ({ type }) => {
  const iconsText = {
    LOST: 'P',
    FOUND: 'E',
    ADOPTION: 'A'
  };

  const iconsStyle = {
    LOST: styles.lost,
    FOUND: styles.found,
    ADOPTION: styles.adoption
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
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION']).isRequired
};

export default PublicationIcon;
