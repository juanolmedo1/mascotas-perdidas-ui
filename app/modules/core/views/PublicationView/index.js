import { connect } from 'react-redux';
import { Image, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import LoadingView from '@core/views/LoadingView';
import PublicationHeader from '@core/components/PublicationHeader';
import styles from '@core/views/PublicationView/styles';

const PublicationView = ({ route, publications }) => {
  const { id } = route.params;
  const [publication, setPublication] = useState();

  useEffect(() => {
    const publicationArray = publications.data.filter(item => item.id === id);
    if (publicationArray.length) {
      setPublication(publicationArray[0]);
    } else {
      // Pedir publicación a la API
    }
  }, [id, publications.data]);

  if (!publication) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <PublicationHeader
        type={publication.type}
        profileImage="asd"
        username="username"
      />
      <ScrollView horizontal={true} contentContainerStyle={styles.carousel}>
        {publication.pet.photos.map(photo => (
          <Image
            key={photo.data}
            style={styles.image}
            source={{ uri: `data:${photo.type};base64,${photo.data}` }}
          />
        ))}
      </ScrollView>
      <View style={styles.informationContainer}>
        <Text>Información</Text>
        <Text>ID = {id}</Text>
      </View>
    </View>
  );
};

PublicationView.propTypes = {
  publications: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    data: PropTypes.array
  }).isRequired
};

const mapDispatchToProps = {
  // getPublication: fetchPublication
};

const mapStateToProps = state => ({
  publications: state.publications
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationView);
