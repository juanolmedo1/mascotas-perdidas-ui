import { connect } from 'react-redux';
import { ImageBackground, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { fetchFavorites } from '@likes/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@likes/views/LikesView/constants';
import { setHasToRefreshFavorites } from '@core/store/refreshments/actions';
import Divider from '@app/modules/core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@likes/views/LikesView/styles';
import LikesLoadingView from '@likes/views/LikesLoadingView';
import { getLoggedUserId } from '@app/modules/login/store/selectors';

const LikesView = ({
  favorites,
  getFavorites,
  refreshments,
  refreshFavorites,
  userId
}) => {
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

  const renderLikesSkeletonView = () => <LikesLoadingView />;
  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.noLikes}>{LABELS.no_publications}</Text>
    </View>
  );
  const renderLikesList = (data, inProgress) => (
    <PublicationsList
      data={data}
      refreshControlProps={{
        refreshing: inProgress,
        onRefresh: () => getFavorites(userId)
      }}
    />
  );

  const renderContent = () => {
    const { favoritesPublications, requestFavoritesInProgress } = favorites;
    return !favoritesPublications
      ? renderLikesSkeletonView()
      : favoritesPublications.length
      ? renderLikesList(favoritesPublications, requestFavoritesInProgress)
      : renderEmptyList();
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <Divider />
        <View style={styles.content}>{renderContent()}</View>
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
  userId: getLoggedUserId(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesView);
