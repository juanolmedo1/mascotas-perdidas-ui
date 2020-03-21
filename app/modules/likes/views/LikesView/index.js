import { ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@likes/views/LikesView/styles';

export class LikesView extends PureComponent {
  render() {
    return (
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
        <SafeAreaView style={styles.container}>
          <Text>Likes view</Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default LikesView;
