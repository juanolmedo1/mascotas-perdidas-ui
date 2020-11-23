import React from 'react';
import { View } from 'react-native';
import styles from '@likes/views/LikesLoadingView/styles';
import { PublicationItem } from '@home/views/HomeLoadingView';

const LikesLoadingView = () => {
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

export default LikesLoadingView;
