import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@upload/views/UploadView/styles';

export class UploadView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Upload View</Text>
      </SafeAreaView>
    );
  }
}

export default UploadView;
