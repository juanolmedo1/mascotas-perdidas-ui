import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@likes/views/LikesView/styles';
import PublicationCard from '@core/components/PublicationCard';

export class LikesView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.block}>
          <PublicationCard
            type="lost"
            id="asd"
            image="asd"
            date="Hace 2 días"
          />
          <PublicationCard
            type="found"
            id="asd"
            image="asd"
            date="Hace 1 día"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default LikesView;
