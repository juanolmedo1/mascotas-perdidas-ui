import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@profile/views/ProfileView/styles';

export class ProfileView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile View</Text>
      </SafeAreaView>
    );
  }
}

export default ProfileView;
