import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import DateUtils from '@core/utils/date';
import NavigationService from '@core/utils/navigation';
import PublicationIcon from '@core/components/PublicationIcon';
import styles from '@core/components/PublicationCard/styles';

const PublicationCard = ({
  id,
  username,
  profileImage,
  imageShown,
  type,
  date
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('Publication', { id })}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: profileImage
          }}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image style={styles.image} source={{ uri: imageShown }} />
      <View style={styles.info}>
        <PublicationIcon type={type} />
        <Text style={styles.date}>{DateUtils.difference(date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

PublicationCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION']).isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageShown: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default PublicationCard;
