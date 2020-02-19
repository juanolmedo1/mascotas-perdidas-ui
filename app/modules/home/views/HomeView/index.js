import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { PureComponent } from 'react';
import styles from '@home/views/HomeView/styles';
import PetIcon from '@app/modules/core/components/PetIcon';
import PetGender from '@core/components/PetGender';
import PublicationType from '@app/modules/core/components/PublicationType';
import variables from '@app/styles/variables';
import PublicationIcon from '@app/modules/core/components/PublicationIcon';
import Button from '@app/modules/core/components/Button';

export class HomeView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.block}>
          <PublicationIcon type="lost" />
          <PublicationIcon type="found" />
          <PublicationIcon type="adoption" />
        </View>
        <View style={styles.block}>
          <PublicationType
            type="lost"
            primaryColor={variables.colors.textRed}
            active
          />
          <PublicationType
            type="found"
            primaryColor={variables.colors.textGreen}
          />
          <PublicationType
            type="adoption"
            primaryColor={variables.colors.textBlue}
          />
        </View>
        <View style={styles.block}>
          <PetGender type="male" />
          <PetGender type="female" active />
          <PetGender type="undefined" />
        </View>
        <View style={styles.block}>
          <PetIcon type="dog" />
          <PetIcon type="cat" />
          <PetIcon type="other" active />
        </View>
        <View style={styles.column}>
          <Button
            type="primary"
            onPress={() => {}}
            leftArrow
            text="Continuar"
          />
          <Button
            type="secondary"
            onPress={() => {}}
            rightArrow
            text="Continuar"
          />
          <Button
            type="tertiary"
            onPress={() => {}}
            leftArrow
            rightArrow
            text="Continuar"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeView;
