import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/AdditionalInformation/constants';
import styles from '@upload/components/AdditionalInformation/styles';

const AdditionalInformation = ({ information, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <TextInput
        style={styles.textInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChange}
        value={information}
        placeholder={LABELS.placeholder}
      />
    </View>
  );
};

AdditionalInformation.propTypes = {
  information: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AdditionalInformation;
