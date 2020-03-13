import { View, Text, Switch } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@upload/components/HasCollar/styles';
import variables from '@styles/variables';

const HasCollar = ({ active = false, updateSelection }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Posee collar?</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>No</Text>
        <Switch
          onValueChange={updateSelection}
          value={active}
          thumbColor={
            active
              ? variables.colors.backgroundOrange
              : variables.colors.backgroundDarkGrey
          }
          trackColor={{
            true: variables.colors.backgroundLightOrange,
            false: variables.colors.backgroundLightGrey
          }}
        />
        <Text style={styles.text}>Si</Text>
      </View>
    </View>
  );
};

HasCollar.propTypes = {
  active: PropTypes.bool,
  updateSelection: PropTypes.func.isRequired
};

export default HasCollar;
