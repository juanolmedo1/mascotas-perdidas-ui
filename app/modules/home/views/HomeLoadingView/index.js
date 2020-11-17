import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View } from 'react-native';
import styles from '@home/views/HomeLoadingView/styles';

export const PublicationItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SkeletonView containerStyle={styles.profileImage} />
        <SkeletonView containerStyle={styles.username} />
      </View>
      <SkeletonView containerStyle={styles.image} />
      <View style={styles.info}>
        <SkeletonView containerStyle={styles.type} />
        <SkeletonView containerStyle={styles.date} />
      </View>
    </View>
  );
};

const HomeLoadingView = () => {
  return (
    <View style={styles.content}>
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
    </View>
  );
};

export default HomeLoadingView;
