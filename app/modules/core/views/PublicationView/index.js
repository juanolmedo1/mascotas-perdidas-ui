import { Text, Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '@core/views/PublicationView/styles';
import PublicationHeader from '@core/components/PublicationHeader';
import LoadingView from '@core/views/LoadingView';

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
      <Image
        style={styles.image}
        source={{
          uri: 'https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg'
        }}
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
