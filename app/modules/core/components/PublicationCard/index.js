import { TouchableOpacity, View, Image, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationCard/styles';
import PublicationIcon from '@core/components/PublicationIcon';

const PublicationCard = ({ id, image, type, date }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg'
        }}
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
  type: PropTypes.oneOf(['lost', 'found', 'adoption']).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default PublicationCard;
