import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ColorPicker } from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import styles from '@upload/components/ColorSelect/styles';
import IconAnt from 'react-native-vector-icons/AntDesign';

const ColorSelect = ({
  showPicker = false,
  color,
  updateColor,
  togglePicker
}) => {
  if (!showPicker) {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={togglePicker}>
          <Text style={styles.text}>Agregar Color</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <View style={[styles.color, { backgroundColor: color }]} />
        <TouchableOpacity style={styles.close} onPress={togglePicker}>
          <IconAnt name="closecircleo" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <ColorPicker
        style={styles.picker}
        defaultColor={color}
        onColorSelected={updateColor}
        sliderComponent={Slider}
      />
    </View>
  );
};

export default ColorSelect;
