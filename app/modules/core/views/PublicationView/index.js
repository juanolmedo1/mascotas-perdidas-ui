import { connect } from 'react-redux';
import { FlatList, Image, Text, View } from 'react-native';
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
      <FlatList
        keyExtractor={item => item.data}
        data={publication.pet.photos}
        numColumns={1}
        renderItem={({ item }) => (
          <Image
            key={item.data}
            style={styles.image}
            source={{ uri: `data:image/gif;base64,${item.data}` }}
            resizeMode="contain"
          />
        )}
      />
      <Text>Información</Text>
      <Text>ID = {id}</Text>
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
