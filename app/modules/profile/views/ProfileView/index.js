import { connect } from 'react-redux';
import { ImageBackground, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import ProfileHeader from '@profile/components/ProfileHeader';
import ProfilePublications from '@profile/components/ProfilePublications';
import styles from '@profile/views/ProfileView/styles';

const ProfileView = ({ session }) => {
  const { profileInfo } = session;
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <ProfileHeader profile={profileInfo} />
        <ProfilePublications publications={profileInfo.publications} />
      </View>
    </ImageBackground>
  );
};

ProfileView.propTypes = {
  session: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    profileInfo: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
