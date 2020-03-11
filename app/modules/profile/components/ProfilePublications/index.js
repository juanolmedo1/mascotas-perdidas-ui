import { View, Image, ScrollView } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@profile/components/ProfilePublications/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfilePublications = ({ publications }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {publications &&
          publications.map(publication => (
            <TouchableOpacity key={publication.id}>
              <Image
                style={styles.image}
                source={{ uri: publication.photos[0] }}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

ProfilePublications.propTypes = {
  publications: PropTypes.array.isRequired
};

export default ProfilePublications;
