import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/AdditionalInformation/styles';

const AdditionalInformation = () => {
  const [info, updateInfo] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Adicional</Text>
      <TextInput
        style={styles.textInput}
        multiline
        textAlignVertical="top"
        onChangeText={updateInfo}
        value={info}
        placeholder="Ej: Dirección exacta, algún rasgo diferencial, etc."
      />
    </View>
  );
};

export default AdditionalInformation;
