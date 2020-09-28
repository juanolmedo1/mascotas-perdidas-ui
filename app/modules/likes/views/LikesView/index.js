import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import IconIon from 'react-native-vector-icons/Ionicons';

import { fetchFavorites } from '@likes/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@likes/views/LikesView/constants';
import { setHasToRefreshFavorites } from '@core/store/refreshments/actions';
import Divider from '@app/modules/core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@likes/views/LikesView/styles';
import variables from '@app/styles/variables';

const LikesView = ({
  favorites,
  getFavorites,
  refreshments,
  refreshFavorites,
  session
}) => {
  const { id: userId } = session.profileInfo;

  useEffect(() => {
    getFavorites(userId);
  }, [getFavorites, userId]);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshments.hasToRefreshFavorites) {
        getFavorites(userId);
        refreshFavorites(false);
      }
    }, [
      getFavorites,
      refreshFavorites,
      refreshments.hasToRefreshFavorites,
      userId
    ])
  );

  const { favoritesPublications, requestFavoritesInProgress } = favorites;
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => NavigationService.goBack()}
          >
            <IconIon
              name="md-arrow-back"
              size={25}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <Divider />
        <View style={styles.content}>
          {requestFavoritesInProgress || !session ? (
            <LoadingView />
          ) : (
            <PublicationsList
              data={favoritesPublications}
              refreshControlProps={{
                refreshing: requestFavoritesInProgress,
                onRefresh: () => getFavorites(userId)
              }}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  getFavorites: userId => fetchFavorites(userId),
  refreshFavorites: refreshValue => setHasToRefreshFavorites(refreshValue)
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  refreshments: state.refreshments,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesView);
