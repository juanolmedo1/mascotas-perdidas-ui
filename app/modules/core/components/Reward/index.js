import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { LABELS } from '@core/components/Reward/constants';
import styles from '@core/components/Reward/styles';
import variables from '@styles/variables';

const Reward = ({ show, hasReward, onChange }) => {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>{LABELS.switchValues.noReward}</Text>
        <Switch
          onValueChange={onChange}
          value={hasReward}
          thumbColor={
            hasReward
              ? variables.colors.backgroundOrange
              : variables.colors.backgroundDarkGrey
          }
          trackColor={{
            true: variables.colors.backgroundLightOrange,
            false: variables.colors.backgroundLightGrey
          }}
        />
        <Text style={styles.text}>{LABELS.switchValues.reward}</Text>
      </View>
    </View>
  );
};

Reward.propTypes = {
  hasReward: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Reward;
