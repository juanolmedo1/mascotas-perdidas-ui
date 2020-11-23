import React from 'react';
import { View } from 'react-native';
import styles from '@notifications/views/NotificationsLoadingView/styles';
import SkeletonView from '@core/components/SkeletonView';

export const NotificationItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        <SkeletonView containerStyle={styles.userImage} />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.titleContainer}>
          <SkeletonView containerStyle={styles.title} />
          <SkeletonView containerStyle={styles.creationDate} />
        </View>
        <SkeletonView containerStyle={styles.description} />
      </View>
      <View style={styles.imageContainer}>
        <SkeletonView containerStyle={styles.image} />
      </View>
    </View>
  );
};
const NotificationsLoadingView = () => {
  return (
    <View style={styles.content}>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </View>
  );
};

export default NotificationsLoadingView;
