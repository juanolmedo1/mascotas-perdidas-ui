import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@likes/views/LikesView/styles';

export class LikesView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Likes view</Text>
      </SafeAreaView>
    );
  }
}

export default LikesView;
