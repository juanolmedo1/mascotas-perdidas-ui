import { connect } from 'react-redux';
import { ImageBackground, View, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { fetchUserPublications } from '@login/store/actions';
import { useFocusEffect } from '@react-navigation/native';
import { setHasToRefreshProfile } from '@core/store/refreshments/actions';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import ProfileHeader from '@profile/components/ProfileHeader';
import ProfilePublications from '@profile/components/ProfilePublications';
import styles from '@profile/views/ProfileView/styles';
import { getFavorites } from '@app/modules/likes/store/selectors';
import { LABELS } from '@profile/views/ProfileView/constants';
import ProfileLoadingView from '@profile/views/ProfileLoadingView';

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

  const favCount = (favorites && favorites.length) || 0;

  const renderProfileSkeletonView = () => <ProfileLoadingView />;
  const renderEmptyList = () => (
    <View style={styles.noPublicationsContainer}>
      <Text style={styles.noPublicationsText}>{LABELS.no_publications}</Text>
    </View>
  );
  const renderUserPublications = () => (
    <ProfilePublications publications={profileInfo.publications} />
  );

  const renderContent = () => {
    return !profileInfo.publications
      ? renderProfileSkeletonView()
      : profileInfo.publications.length
      ? renderUserPublications()
      : renderEmptyList();
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
      >
        <View style={styles.container}>
          <ProfileHeader profile={profileInfo} favCount={favCount} />
          {renderContent()}
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
