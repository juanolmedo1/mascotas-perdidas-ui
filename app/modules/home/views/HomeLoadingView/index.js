import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View, Text } from 'react-native';
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
export const UbicationItem = () => {
  return (
    <View style={styles.ubicationTextContainer}>
      <SkeletonView containerStyle={styles.ubicationText} />
      <Text style={styles.divider}>|</Text>
      <SkeletonView containerStyle={styles.ubicationText} />
      <Text style={styles.divider}>|</Text>
      <SkeletonView containerStyle={styles.ubicationText} />
    </View>
  );
};

const HomeLoadingView = () => {
  return (
    <View>
      <UbicationItem />
      <View style={styles.content}>
        <PublicationItem />
        <PublicationItem />
        <PublicationItem />
        <PublicationItem />
        <PublicationItem />
        <PublicationItem />
      </View>
    </View>
  );
};

export default HomeLoadingView;
