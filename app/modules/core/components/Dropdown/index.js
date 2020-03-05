import { View, Picker, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@core/components/Dropdown/styles';

const Dropdown = ({
  data,
  changeValue,
  selectedValue,
  title,
  enabled = true
}) => {
  const arrowStyle = enabled ? styles.activeArrow : styles.inactiveArrow;
  const pickerContainerStyle = enabled
    ? styles.activePickerContainer
    : styles.inactivePickerContainer;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={pickerContainerStyle}>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={value => changeValue(value)}
          enabled={enabled}
        >
          {data &&
            data.map(({ label, value, id }) => (
              <Picker.Item key={value} label={label} value={id} />
            ))}
        </Picker>
        <View style={arrowStyle} />
      </View>
    </View>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  enabled: PropTypes.bool
};

export default Dropdown;
