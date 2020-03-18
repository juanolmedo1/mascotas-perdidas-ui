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
            uri:
              'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s320x320/56412495_2336547096630651_6295553287131234304_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=jJs8DCKfs-4AX8V4Qtb&oh=15fa0461fe42ff230772c6c7a34123dd&oe=5E8AAFE8'
          }}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.iconContainer}>
        <PublicationIcon type={type} />
      </View>
    </View>
  );
};

PublicationHeader.propTypes = {
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['LOST', 'FOUND', 'ADOPTION']).isRequired
};

export default PublicationHeader;
