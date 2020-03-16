import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/HasCollar/constants';
import styles from '@upload/components/HasCollar/styles';
import variables from '@styles/variables';

const HasCollar = ({ hasCollar, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>{LABELS.switchValues.noCollar}</Text>
        <Switch
          onValueChange={onChange}
          value={hasCollar}
          thumbColor={
            hasCollar
              ? variables.colors.backgroundOrange
              : variables.colors.backgroundDarkGrey
          }
          trackColor={{
            true: variables.colors.backgroundLightOrange,
            false: variables.colors.backgroundLightGrey
          }}
        />
        <Text style={styles.text}>{LABELS.switchValues.collar}</Text>
      </View>
    </View>
  );
};

HasCollar.propTypes = {
  hasCollar: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default HasCollar;
