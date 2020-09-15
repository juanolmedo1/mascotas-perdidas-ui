import { connect } from 'react-redux';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { fetchPublications } from '@home/store/actions';
import { setHasToRefreshHome } from '@core/store/refreshments/actions';
import Divider from '@core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import Octicons from 'react-native-vector-icons/Octicons';
import variables from '@app/styles/variables';
import styles from '@home/views/HomeView/styles';

const HomeView = ({
  getPublications,
  publications,
  refreshments,
  refreshHome
}) => {
  useEffect(() => {
    getPublications();
  }, [getPublications]);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshments.hasToRefreshHome) {
        getPublications();
        refreshHome(false);
      }
    }, [getPublications, refreshHome, refreshments.hasToRefreshHome])
  );

  const refresh = () => {
    getPublications();
  };

  const { requestFailed, requestInProgress, data } = publications;

  let content = null;

  if (requestInProgress) {
    content = <LoadingView />;
  } else {
    content = (
      <PublicationsList
        data={data}
        refreshControlProps={{
          refreshing: requestInProgress,
          onRefresh: refresh
        }}
      />
    );
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
  getPublications: fetchPublications,
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue)
};

const mapStateToProps = state => ({
  publications: state.publications,
  refreshments: state.refreshments
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
