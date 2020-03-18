import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { LABELS } from '@upload/components/PhoneNumber/constants';
import styles from '@upload/components/PhoneNumber/styles';
import variables from '@app/styles/variables';

const PhoneNumber = ({ phoneNumber, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.textInputContainer}>
        <IconSimple
          name="phone"
          style={styles.icon}
          size={20}
          color={variables.colors.backgroundBlue}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={onChange}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
      </View>
    </View>
  );
};

PhoneNumber.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PhoneNumber;
