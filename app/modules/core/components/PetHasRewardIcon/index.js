import { View, Text } from 'react-native';
import React from 'react';
import styles from '@core/components/PetHasRewardIcon/styles';
import { LABELS } from '@core/components/PetHasRewardIcon/constants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const PetHasRewardIcon = () => {
  const iconColor = styles.iconColor.color;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconContainer}>
        <IconFontAwesome
          name="dollar"
          style={styles.icon}
          size={50}
          color={iconColor}
        />
      </View>
    </View>
  );
};

export default PetHasRewardIcon;
