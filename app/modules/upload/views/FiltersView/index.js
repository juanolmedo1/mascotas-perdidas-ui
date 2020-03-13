import { View, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/views/FiltersView/styles';
import Button from '@core/components/Button';
import SingleSelectPet from '@upload/components/SingleSelectPet';
import SingleSelectPublication from '@upload/components/SingleSelectPublication';
import SingleSelectGender from '@upload/components/SingleSelectGender';
import SingleSelectSize from '@upload/components/SingleSelectSize';
import Reward from '@core/components/Reward';
import AdditionalInformation from '@upload/components/AdditionalInformation';
import PhoneNumber from '@upload/components/PhoneNumber';
import HasCollar from '@upload/components/HasCollar';

const FiltersView = () => {
  const [reward, setReward] = useState(false);
  const [collar, setCollar] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Seleccione según corresponda:</Text>
      </View>
      <View style={styles.block}>
        <SingleSelectPet />
      </View>
      <View style={styles.block}>
        <SingleSelectPublication />
      </View>
      <View style={styles.block}>
        <SingleSelectGender />
      </View>
      <View style={styles.block}>
        <SingleSelectSize />
      </View>
      <View style={styles.block}>
        <View style={styles.rewardContainer}>
          <Reward updateSelection={setReward} active={reward} />
          <HasCollar updateSelection={setCollar} active={collar} />
        </View>
      </View>
      <View style={styles.block}>
        <PhoneNumber />
      </View>
      <View style={styles.block}>
        <AdditionalInformation />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Publicar" onPress={() => {}} type="primary" />
      </View>
    </ScrollView>
  );
};

export default FiltersView;
