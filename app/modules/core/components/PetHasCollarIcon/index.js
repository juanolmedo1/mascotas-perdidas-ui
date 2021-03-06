import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/PetHasCollarIcon/styles';
import { LABELS } from '@core/components/PetHasCollarIcon/constants';
import IconAnt from 'react-native-vector-icons/AntDesign';

const PetHasCollarIcon = ({ hasCollar }) => {
  const iconType = hasCollar ? 'check' : 'close';
  const iconBorderColor = hasCollar ? styles.borderGreen : styles.borderRed;
  const iconColor = hasCollar
    ? styles.checkColor.color
    : styles.closeColor.color;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={[styles.iconContainer, iconBorderColor]}>
        <IconAnt name={iconType} size={30} color={iconColor} />
      </View>
    </View>
  );
};

PetHasCollarIcon.propTypes = {
  hasCollar: PropTypes.bool.isRequired
};

export default PetHasCollarIcon;
