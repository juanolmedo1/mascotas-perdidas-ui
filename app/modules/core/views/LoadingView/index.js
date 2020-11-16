import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from '@core/views/LoadingView/styles';
import variables from '@styles/variables';

const LoadingView = ({ contain = false }) => {
  return (
    <View style={contain ? styles.container : styles.containerFull}>
      <ActivityIndicator
        size="large"
        color={variables.colors.backgroundOrange}
      />
    </View>
  );
};

export default LoadingView;
