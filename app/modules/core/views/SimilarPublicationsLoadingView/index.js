import React from 'react';
import { View } from 'react-native';
import styles from '@core/views/SimilarPublicationsLoadingView/styles';
import { PublicationItem } from '@home/views/HomeLoadingView';

const SimilarPublicationsLoadingView = () => {
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

export default SimilarPublicationsLoadingView;
