import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/PhoneNumber/styles';

const PhoneNumber = () => {
  const [phone, updatePhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teléfono</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={updatePhone}
        value={phone}
      />
    </View>
  );
};

export default PhoneNumber;
