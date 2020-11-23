import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View } from 'react-native';
import styles from '@upload/views/FiltersLoadingView/styles';

export const RoundedItem = () => {
  return (
    <View style={styles.roundedItemContainer}>
      <SkeletonView containerStyle={styles.circle} />
      <SkeletonView containerStyle={styles.value} />
    </View>
  );
};

export const SquareItem = () => {
  return (
    <View style={styles.squareItemContainer}>
      <SkeletonView containerStyle={styles.square} />
      <SkeletonView containerStyle={styles.value} />
    </View>
  );
};
export const RoundedContainer = () => {
  return (
    <View style={styles.roundedContainer}>
      <RoundedItem />
      <RoundedItem />
      <RoundedItem />
    </View>
  );
};

export const SquareContainer = () => {
  return (
    <View style={styles.squareContainer}>
      <SquareItem />
      <SquareItem />
      <SquareItem />
    </View>
  );
};

const FiltersLoadingView = () => {
  return (
    <View>
      <SkeletonView containerStyle={styles.firstTitle} />
      <SkeletonView containerStyle={styles.title} />
      <RoundedContainer />
      <SkeletonView containerStyle={styles.title} />
      <SquareContainer />
      <SkeletonView containerStyle={styles.title} />
      <SquareContainer />
      <SkeletonView containerStyle={styles.title} />
      <SquareContainer />
    </View>
  );
};

export default FiltersLoadingView;
