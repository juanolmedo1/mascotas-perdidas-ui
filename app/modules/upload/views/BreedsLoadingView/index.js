import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View } from 'react-native';
import styles from '@upload/views/BreedsLoadingView/styles';
import Divider from '@app/modules/core/components/Divider';

export const BreedItem = () => {
  return (
    <View style={styles.breedItemContainer}>
      <SkeletonView containerStyle={styles.image} />
      <SkeletonView containerStyle={styles.breed} />
      <SkeletonView containerStyle={styles.value} />
    </View>
  );
};
export const HeaderItem = () => {
  return (
    <View style={styles.titleContainer}>
      <SkeletonView containerStyle={styles.title} />
      <SkeletonView containerStyle={styles.titleSmall} />
      <SkeletonView containerStyle={styles.subtitle} />
      <SkeletonView containerStyle={styles.subtitle} />
      <SkeletonView containerStyle={styles.subtitle} />
    </View>
  );
};

const BreedsLoadingView = () => {
  return (
    <View>
      <HeaderItem />
      <View style={styles.content}>
        <BreedItem />
        <Divider />
        <BreedItem />
        <Divider />
        <BreedItem />
        <Divider />
        <SkeletonView containerStyle={styles.button} />
      </View>
    </View>
  );
};

export default BreedsLoadingView;
