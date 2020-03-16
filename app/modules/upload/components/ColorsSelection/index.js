import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/ColorsSelection/styles';
import ColorSelect from '@upload/components/ColorSelect';

const ColorsSelection = () => {
  const [firstPicker, showFirstPicker] = useState(true);
  const [secondPicker, showSecondPicker] = useState(false);
  const [thirdPicker, showThirdPicker] = useState(false);
  const [firstPickerColor, updateFirstPickerColor] = useState('#000000');
  const [secondPickerColor, updateSecondPickerColor] = useState('#000000');
  const [thirdPickerColor, updateThirdPickerColor] = useState('#000000');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione color/es predominante/s</Text>
      <View style={styles.pickersContainer}>
        <ColorSelect
          showPicker={firstPicker}
          color={firstPickerColor}
          updateColor={updateFirstPickerColor}
          togglePicker={() => showFirstPicker(!firstPicker)}
        />
        <ColorSelect
          showPicker={secondPicker}
          color={secondPickerColor}
          updateColor={updateSecondPickerColor}
          togglePicker={() => showSecondPicker(!secondPicker)}
        />
        <ColorSelect
          showPicker={thirdPicker}
          color={thirdPickerColor}
          updateColor={updateThirdPickerColor}
          togglePicker={() => showThirdPicker(!thirdPicker)}
        />
      </View>
      <Text style={styles.note}>
        Para seleccionar el color, presione el circulo central.
      </Text>
    </View>
  );
};

export default ColorsSelection;
