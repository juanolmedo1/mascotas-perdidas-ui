import { ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@notifications/views/NotificationsView/styles';
export class NotificationsView extends PureComponent {
  render() {
    return (
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
        <SafeAreaView style={styles.container}>
          <Text>Notifications view</Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default NotificationsView;
