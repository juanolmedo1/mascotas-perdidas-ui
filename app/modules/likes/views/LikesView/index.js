import { ImageBackground, Text, View } from 'react-native';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@likes/views/LikesView/constants';
import Divider from '@app/modules/core/components/Divider';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@likes/views/LikesView/styles';

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
          <PublicationsList
            data={[]}
            /*refreshControlProps={{
              refreshing: requestInProgress,
              onRefresh: refresh
            }}*/
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LikesView;
