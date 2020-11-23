import React from 'react';
import { View } from 'react-native';
import styles from '@profile/views/ProfileLoadingView/styles';
import SkeletonView from '@core/components/SkeletonView';

const ProfileLoadingView = () => {
  return (
    <View style={styles.content}>
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
      <SkeletonView containerStyle={styles.publication} />
    </View>
  );
};

export default ProfileLoadingView;
