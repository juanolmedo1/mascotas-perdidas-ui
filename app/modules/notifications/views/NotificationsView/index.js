import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@notifications/views/NotificationsView/styles';

export class NotificationsView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Notifications View</Text>
      </SafeAreaView>
    );
  }
}

export default NotificationsView;
