import { FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '@home/views/HomeView/styles';
import { fetchPublications } from '@home/store/actions';
import PublicationCard from '@core/components/PublicationCard';
import LoadingView from '@core/views/LoadingView';
import { fetchLogin } from '@login/store/actions';

const HomeView = ({ publications, getPublications, fetchLoginFunc }) => {
  useEffect(() => {
    getPublications();
    fetchLoginFunc('asd');
  }, [fetchLoginFunc, getPublications]);

  const { requestFailed, requestInProgress, data } = publications;

  if (requestInProgress) {
    return <LoadingView />;
  }

  return (
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
          image="test"
        />
      )}
    />
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
  getPublications: fetchPublications,
  fetchLoginFunc: fetchLogin
};

const mapStateToProps = state => ({
  publications: state.publications
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
