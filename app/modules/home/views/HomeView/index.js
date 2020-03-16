import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { fetchLogin } from '@login/store/actions';
import { fetchPublications } from '@home/store/actions';
import LoadingView from '@core/views/LoadingView';
import PublicationCard from '@core/components/PublicationCard';
import styles from '@home/views/HomeView/styles';

const HomeView = ({ publications, getPublications }) => {
  useEffect(() => {
    getPublications();
  }, [getPublications]);

  const { requestFailed, requestInProgress, data } = publications;

  if (requestInProgress) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PublicationCard
            key={item.id}
            id={item.id}
            date="Hace 2 días"
            type={item.type}
            imageShownBase64={item.pet.photos[0].data}
          />
        )}
      />
    </View>
  );
};

HomeView.propTypes = {
  getPublications: PropTypes.func.isRequired,
  publications: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    data: PropTypes.array
  }).isRequired
};

const mapDispatchToProps = {
  getPublications: fetchPublications
};

const mapStateToProps = state => ({
  publications: state.publications
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
