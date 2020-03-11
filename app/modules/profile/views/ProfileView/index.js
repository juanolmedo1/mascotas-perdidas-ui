import { View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '@profile/views/ProfileView/styles';
import ProfileHeader from '@profile/components/ProfileHeader';
import ProfilePublications from '@profile/components/ProfilePublications';

const ProfileView = ({ session }) => {
  const { profileInfo } = session;
  return (
    <View style={styles.container}>
      <ProfileHeader profile={profileInfo} />
      <ProfilePublications publications={profileInfo.publications} />
    </View>
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
