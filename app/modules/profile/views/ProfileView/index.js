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
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import ProfileHeader from '@profile/components/ProfileHeader';
import ProfilePublications from '@profile/components/ProfilePublications';
import styles from '@profile/views/ProfileView/styles';
import { fetchUserPublications } from '@login/store/actions';

const ProfileView = ({ session, getUserPublications }) => {
  const { profileInfo, requestPublicationsInProgress } = session;
  useEffect(() => {
    getUserPublications({ id: profileInfo.id });
  }, [getUserPublications, profileInfo.id]);

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
          <ProfilePublications publications={profileInfo.publications} />
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
  getUserPublications: fetchUserPublications
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
