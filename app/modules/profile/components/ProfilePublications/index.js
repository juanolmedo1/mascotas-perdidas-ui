import { View, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@profile/components/ProfilePublications/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '@core/utils/navigation';

const ProfilePublications = ({ publications }) => {
  return (
    <View style={styles.container}>
      <View style={styles.publicationsContainer}>
        {publications &&
          publications.map(publication => (
            <TouchableOpacity
              key={publication.id}
              onPress={() =>
                NavigationService.navigate('Publication', {
                  id: publication.id
                })
              }
            >
              <Image
                style={styles.image}
                source={{
                  uri: `data:${publication.pet.photos[0].type};base64,${publication.pet.photos[0].data}`
                }}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

ProfilePublications.propTypes = {
  publications: PropTypes.array.isRequired
};

export default ProfilePublications;
