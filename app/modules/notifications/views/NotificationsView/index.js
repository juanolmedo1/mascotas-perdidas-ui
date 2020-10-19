import { ImageBackground, Text, View } from 'react-native';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@notifications/views/NotificationsView/constants';
import Divider from '@app/modules/core/components/Divider';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@notifications/views/NotificationsView/styles';

const NotificationsView = () => {
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <Divider />
        <View style={styles.content}>
          <Text style={styles.contentText}>{LABELS.no_notifications}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NotificationsView;
