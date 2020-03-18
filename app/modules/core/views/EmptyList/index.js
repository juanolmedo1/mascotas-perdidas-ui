import { View, Text } from 'react-native';
import React from 'react';
import styles from '@core/views/EmptyList/styles';
import { LABELS } from '@core/views/EmptyList/constants';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
    </View>
  );
};

export default EmptyList;
