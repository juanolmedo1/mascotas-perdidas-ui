import { View, Text, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PublicationHeader/styles';
import PublicationIcon from '@core/components/PublicationIcon';

const PublicationHeader = ({ username, profileImage, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={{
            uri: profileImage.data
          }}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      {type && (
        <View style={styles.iconContainer}>
          <PublicationIcon type={type} />
        </View>
      )}
    </View>
  );
};

PublicationHeader.propTypes = {
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION'])
};

export default PublicationHeader;
