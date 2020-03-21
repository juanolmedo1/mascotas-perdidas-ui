import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPublications } from '@home/store/actions';
import LoadingView from '@core/views/LoadingView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import variables from '@app/styles/variables';
import PublicationCard from '@core/components/PublicationCard';
import styles from '@home/views/HomeView/styles';
import EmptyList from '@core/views/EmptyList';
import NavigationService from '@core/utils/navigation';

const HomeView = ({ publications, getPublications }) => {
  useEffect(() => {
    getPublications();
  }, [getPublications]);

  const refresh = () => {
    getPublications();
  };

  const { requestFailed, requestInProgress, data } = publications;

  let content = null;

  if (requestInProgress) {
    content = <LoadingView />;
  } else {
    if (!data.length) {
      content = <EmptyList />;
    } else {
      content = (
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <PublicationCard
              key={item.id}
              id={item.id}
              date={item.createdAt}
              type={item.type}
              imageType={item.pet.photos[0].type}
              imageShownBase64={item.pet.photos[0].data}
            />
          )}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Inicio</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={refresh}>
            <Ionicons
              name="md-refresh"
              size={28}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => NavigationService.navigate('Filters')}
          >
            <Octicons
              name="settings"
              size={28}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
        </View>
      </View>
      {content}
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
