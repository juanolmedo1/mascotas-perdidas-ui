import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@upload/components/SimilarPublications/styles';
import PUBLICATION_ENTITY from '@entities/Publication';
import NavigationService from '@core/utils/navigation';

const SimilarPublications = ({ publications, publicationType }) => {
  const type =
    publicationType === PUBLICATION_ENTITY.types.lost
      ? ' está buscando'
      : ' encontró';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¿Alguna de estas mascotas es la que usted
        {type}?
      </Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {publications.map(publication => (
          <TouchableOpacity
            key={publication.id}
            style={styles.imageContainer}
            activeOpacity={0.8}
            onPress={() =>
              NavigationService.navigate('Publication', { id: publication.id })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: 'https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg'
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

SimilarPublications.propTypes = {
  publicationType: PropTypes.oneOf(['LOST', 'FOUND']),
  publications: PropTypes.array.isRequired
};

export default SimilarPublications;
