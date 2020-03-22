import { connect } from 'react-redux';
import {
  ImageBackground,
  FlatList,
  View,
  RefreshControl,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { fetchPublications } from '@home/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import EmptyList from '@core/views/EmptyList';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationCard from '@core/components/PublicationCard';
import Octicons from 'react-native-vector-icons/Octicons';
import variables from '@app/styles/variables';
import styles from '@home/views/HomeView/styles';
import Divider from '@core/components/Divider';

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
          refreshControl={
            <RefreshControl
              refreshing={requestInProgress}
              onRefresh={refresh}
            />
          }
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
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Inicio</Text>
          <View style={styles.iconsContainer}>
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
        <Divider />

        {content}
      </ImageBackground>
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
