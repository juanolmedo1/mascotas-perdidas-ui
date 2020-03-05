import { View, Text } from 'react-native';
import React, { PureComponent } from 'react';
import styles from '@notifications/views/NotificationsView/styles';

export class NotificationsView extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications View</Text>
      </View>
    );
  }
}

export default NotificationsView;
