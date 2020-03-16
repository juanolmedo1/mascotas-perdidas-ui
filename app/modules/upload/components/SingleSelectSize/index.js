import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/SingleSelectSize/styles';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import variables from '@styles/variables';

const SingleSelectSize = ({ show = true }) => {
  const [petSize, setPetSize] = useState();

  const updateSelection = size => {
    setPetSize(size);
  };

  if (!show) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamaño</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection('VERY_SMALL')}
          activeOpacity={0.8}
        >
          <IconAwesome5
            name="dog"
            size={18}
            style={styles.icon}
            color={
              petSize === 'VERY_SMALL'
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection('SMALL')}
          activeOpacity={0.8}
        >
          <IconAwesome5
            name="dog"
            size={30}
            style={styles.icon}
            color={
              petSize === 'SMALL'
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection('MEDIUM')}
          activeOpacity={0.8}
        >
          <IconAwesome5
            name="dog"
            size={45}
            style={styles.icon}
            color={
              petSize === 'MEDIUM'
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => updateSelection('BIG')}
          activeOpacity={0.8}
        >
          <IconAwesome5
            name="dog"
            size={55}
            style={styles.icon}
            color={
              petSize === 'BIG'
                ? variables.colors.backgroundOrange
                : variables.colors.backgroundDarkGrey
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleSelectSize;
