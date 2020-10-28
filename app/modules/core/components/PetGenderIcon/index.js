import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import styles from '@core/components/PetGenderIcon/styles';
import variables from '@app/styles/variables';
import { LABELS } from '@core/components/PetGenderIcon/constants';

const PetGenderIcon = ({ type }) => {
  const genderTypes = {
    MALE: (
      <IconIon
        name="ios-male"
        size={25}
        color={variables.colors.backgroundOrange}
      />
    ),
    FEMALE: (
      <IconIon
        name="ios-female"
        size={25}
        color={variables.colors.backgroundOrange}
      />
    ),
    UNDEFINED: (
      <IconAnt
        name="question"
        size={25}
        color={variables.colors.backgroundOrange}
      />
    )
  };

  const petGenderIcon = genderTypes[type];
  const petGenderText = LABELS.gender[type];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconContainer}>{petGenderIcon}</View>
      <Text style={styles.value}>{petGenderText}</Text>
    </View>
  );
};

PetGenderIcon.propTypes = {
  type: PropTypes.oneOf(['MALE', 'FEMALE', 'UNDEFINED']).isRequired
};

export default PetGenderIcon;
