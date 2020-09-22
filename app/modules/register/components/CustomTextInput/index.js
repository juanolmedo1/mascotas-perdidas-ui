import { View, Text, TextInput } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@register/components/CustomTextInput/styles';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import variables from '@styles/variables';

const CustomTextInput = ({
  title,
  placeholder,
  error,
  icon = null,
  ...props
}) => {
  const iconSet = {
    name: 'user',
    lastname: 'user',
    username: 'user',
    dateOfBirth: 'calendar',
    email: 'envelope',
    phoneNumber: 'phone',
    password: 'lock'
  };
  const iconName = iconSet[icon];
  const textInputContainerStyle = error
    ? styles.textInputErrorContainer
    : styles.textInputContainer;
  const iconContainerStyle = error
    ? styles.iconContainerError
    : styles.iconContainer;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{title}</Text>
      <View style={textInputContainerStyle}>
        {icon && (
          <View style={iconContainerStyle}>
            <IconSimple
              name={iconName}
              size={16}
              color={
                error
                  ? variables.colors.backgroundRed
                  : variables.colors.backgroundOrange
              }
            />
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="lightgrey"
          {...props}
        />
      </View>
      <View style={styles.errorTextContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

CustomTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([
    'name',
    'lastname',
    'username',
    'dateOfBirth',
    'email',
    'phoneNumber',
    'password'
  ])
};

export default CustomTextInput;
