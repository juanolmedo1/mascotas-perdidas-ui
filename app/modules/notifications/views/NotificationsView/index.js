import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import { LABELS } from '@notifications/views/NotificationsView/constants';
import styles from '@notifications/views/NotificationsView/styles';
import Divider from '@app/modules/core/components/Divider';

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
