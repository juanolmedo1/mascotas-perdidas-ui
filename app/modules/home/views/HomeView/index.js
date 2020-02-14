import {Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import React, {PureComponent} from 'react';
import styles from '@home/views/HomeView/styles';

export class HomeView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Home View</Text>
      </SafeAreaView>
    );
  }
}

export default HomeView;
