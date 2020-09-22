import { connect } from 'react-redux';
import {
  ImageBackground,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';
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

const ProfileView = ({
  session,
  getUserPublications,
  refreshments,
  refreshProfile
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
        refreshControl={
          <RefreshControl
            refreshing={requestPublicationsInProgress}
            onRefresh={refresh}
          />
        }
      >
        <View style={styles.container}>
          <ProfileHeader profile={profileInfo} />
          {requestPublicationsInProgress ? (
            <LoadingView />
          ) : (
            <ProfilePublications publications={profileInfo.publications} />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

ProfileView.propTypes = {
  getUserPublications: PropTypes.func.isRequired,
  session: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    requestPublicationsInProgress: PropTypes.bool,
    requestPublicationsFailed: PropTypes.bool,
    currentUbication: PropTypes.object,
    profileInfo: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {
  getUserPublications: fetchUserPublications,
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue)
};

const mapStateToProps = state => ({
  session: state.session,
  refreshments: state.refreshments
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
