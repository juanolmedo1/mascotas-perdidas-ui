import { connect } from 'react-redux';
import {
  ImageBackground,
  View,
  ScrollView,
  RefreshControl,
  Text
} from 'react-native';
import React, { useEffect } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { fetchUserPublications } from '@login/store/actions';
import { useFocusEffect } from '@react-navigation/native';
import { setHasToRefreshProfile } from '@core/store/refreshments/actions';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import ProfileHeader from '@profile/components/ProfileHeader';
import ProfilePublications from '@profile/components/ProfilePublications';
import LoadingView from '@core/views/LoadingView';
import styles from '@profile/views/ProfileView/styles';
import { getFavorites } from '@app/modules/likes/store/selectors';

const ProfileView = ({
  session,
  getUserPublications,
  refreshments,
  refreshProfile,
  favorites
}) => {
  const { profileInfo, requestPublicationsInProgress } = session;

  useEffect(() => {
    getUserPublications({ id: profileInfo.id });
  }, [getUserPublications, profileInfo.id]);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshments.hasToRefreshProfile) {
        getUserPublications({ id: profileInfo.id });
        refreshProfile(false);
      }
    }, [
      getUserPublications,
      profileInfo.id,
      refreshProfile,
      refreshments.hasToRefreshProfile
    ])
  );

  const refresh = () => {
    getUserPublications({ id: profileInfo.id });
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={requestPublicationsInProgress}
            onRefresh={refresh}
          />
        }
      >
        <View style={styles.container}>
          <ProfileHeader profile={profileInfo} favCount={favorites.length} />
          {requestPublicationsInProgress ? (
            <LoadingView />
          ) : !profileInfo.publications || !profileInfo.publications.length ? (
            <View style={styles.noPublicationsContainer}>
              <Text style={styles.noPublicationsText}>
                No tiene ninguna publicación
              </Text>
            </View>
          ) : (
            <ProfilePublications publications={profileInfo.publications} />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  getUserPublications: fetchUserPublications,
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue)
};

const mapStateToProps = state => ({
  session: state.session,
  refreshments: state.refreshments,
  favorites: getFavorites(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
