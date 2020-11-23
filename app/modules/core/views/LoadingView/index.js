import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from '@core/views/LoadingView/styles';
import variables from '@styles/variables';

const LoadingView = ({ contain = false, size = 'large' }) => {
  return (
    <View style={contain ? styles.container : styles.containerFull}>
      <ActivityIndicator
        size={size}
        color={variables.colors.backgroundOrange}
      />
    </View>
  );
};

export default LoadingView;
