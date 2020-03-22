import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import { LABELS } from '@likes/views/LikesView/constants';
import styles from '@likes/views/LikesView/styles';
import Divider from '@app/modules/core/components/Divider';

const LikesView = () => {
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
          <Text style={styles.contentText}>{LABELS.no_publications}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LikesView;
