import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View } from 'react-native';
import styles from '@home/views/MapLoadingView/styles';
import { UbicationItem } from '@home/views/HomeLoadingView';

const MapLoadingView = () => {
  return (
    <View>
      <UbicationItem />
      <SkeletonView containerStyle={styles.map} />
    </View>
  );
};

export default MapLoadingView;
