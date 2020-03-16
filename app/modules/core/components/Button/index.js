import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '@core/components/Button/styles';

const Button = ({
  enabled = true,
  text,
  type,
  onPress,
  loading = false,
  leftArrow = false,
  rightArrow = false
}) => {
  const buttonStyle = styles[type];
  const textStyle = styles[`${type}Text`];
  const arrowColor = styles[`${type}Arrow`].color;
  const loadingColor = styles[`${type}Loading`].color;

  return (
    <TouchableOpacity
      style={enabled ? buttonStyle : styles.disabled}
      onPress={enabled ? onPress : null}
      activeOpacity={0.8}
      disabled={loading}
    >
      {leftArrow && enabled && (
        <Icon
          name="ios-arrow-back"
          style={styles.leftArrow}
          size={20}
          color={arrowColor}
        />
      )}
      {loading ? (
        <ActivityIndicator size="small" color={loadingColor} />
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
      {rightArrow && enabled && (
        <Icon
          name="ios-arrow-forward"
          style={styles.rightArrow}
          size={20}
          color={arrowColor}
        />
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  enabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  leftArrow: PropTypes.bool,
  rightArrow: PropTypes.bool
};

export default Button;
