import { View, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/views/FiltersView/styles';
import Button from '@core/components/Button';
import SingleSelectPet from '@upload/components/SingleSelectPet';
import SingleSelectPublication from '@upload/components/SingleSelectPublication';
import SingleSelectGender from '@upload/components/SingleSelectGender';

const FiltersView = () => {
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
      <View style={styles.buttonContainer}>
        <Button text="Publicar" onPress={() => {}} type="primary" />
      </View>
    </ScrollView>
  );
};

export default FiltersView;
