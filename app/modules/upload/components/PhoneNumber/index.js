import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/PhoneNumber/constants';
import styles from '@upload/components/PhoneNumber/styles';

const PhoneNumber = ({ phoneNumber, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
    </View>
  );
};

PhoneNumber.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PhoneNumber;
