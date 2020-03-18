import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationService from '@core/utils/navigation';
import PublicationIcon from '@core/components/PublicationIcon';
import styles from '@core/components/PublicationCard/styles';

const PublicationCard = ({ id, imageShownBase64, type, date }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('Publicación', { id })}
      activeOpacity={0.8}
    >
      <Image
        style={styles.image}
        source={{ uri: `data:image/gif;base64,${imageShownBase64}` }}
      />
      <View style={styles.info}>
        <PublicationIcon type={type} />
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

PublicationCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION']).isRequired,
  date: PropTypes.string.isRequired,
  imageShownBase64: PropTypes.string.isRequired
};

export default PublicationCard;
