import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import Button from '@core/components/Button';
import styles from '@register/views/UsernameView/styles';
import NavigationService from '@core/utils/navigation';
import CustomTextInput from '@register/components/CustomTextInput';
import IconIon from 'react-native-vector-icons/Ionicons';
import variables from '@styles/variables';
import {
  setLoginData,
  setProfilePhoto,
  registerUser
} from '@register/store/actions';
import ImagePicker from 'react-native-image-crop-picker';
import { Formik } from 'formik';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

const UsernameView = ({ registration, setLoginInfo, setPhoto, createUser }) => {
  const {
    loginData,
    profilePhoto,
    requestInProgress,
    requestError
  } = registration;

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: false,
      includeBase64: true,
      mediaType: 'photo'
    })
      .then(image => {
        setPhoto({ data: image.data, type: image.mime });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const validateValues = values => {
    let errors = {};
    const { username, password, email, repeatPassword } = values;
    if (!username || username === '') {
      errors.username = 'Este campo es obligatorio';
    }
    if (!email || email === '') {
      errors.email = 'Este campo es obligatorio';
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'El email ingresado es inválido';
      }
    }
    if (!password || password === '') {
      errors.password = 'Este campo es obligatorio';
    }
    if (!repeatPassword || repeatPassword === '') {
      errors.repeatPassword = 'Este campo es obligatorio';
    }
    if (password !== repeatPassword) {
      errors.password = 'La contraseña debe ser la misma';
      errors.repeatPassword = 'La contraseña debe ser la misma';
    }
    return errors;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
          activeOpacity={0.8}
        >
          <IconIon
            name="md-arrow-back"
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={openImagePicker}
        style={styles.imageContainer}
      >
        {profilePhoto.data ? (
          <Image
            source={{
              uri: `data:${profilePhoto.type};base64,${profilePhoto.data}`
            }}
            style={styles.image}
          />
        ) : (
          <IconSimple
            name="camera"
            size={32}
            color={variables.colors.backgroundLightGrey}
          />
        )}
      </TouchableOpacity>
      <Formik
        initialValues={{ ...loginData, repeatPassword: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => validateValues(values)}
        onSubmit={values => {
          const errors = validateValues(values);
          if (Object.keys(errors).length === 0) {
            setLoginInfo({
              username: values.username,
              email: values.email,
              password: values.password
            });
            createUser();
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.inputsContainer}>
            <CustomTextInput
              title="Usuario"
              icon="username"
              value={values.username}
              error={errors.username || requestError.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholder="Nombre de usuario"
            />
            <CustomTextInput
              title="Email"
              error={errors.email || requestError.email}
              icon="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Ingrese su email"
            />
            <CustomTextInput
              title="Contraseña"
              icon="password"
              value={values.password}
              error={errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              placeholder="Ingrese su contraseña"
            />
            <CustomTextInput
              title="Repita Contraseña"
              icon="password"
              value={values.repeatPassword}
              error={errors.repeatPassword}
              onChangeText={handleChange('repeatPassword')}
              onBlur={handleBlur('repeatPassword')}
              secureTextEntry={true}
              placeholder="Repita la contraseña"
            />
            <View style={styles.buttonContainer}>
              <Button
                type="primary"
                text="Registrarse"
                loading={requestInProgress}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const mapDispatchToProps = {
  setLoginInfo: setLoginData,
  setPhoto: setProfilePhoto,
  createUser: registerUser
};

const mapStateToProps = state => ({
  registration: state.registration
});

export default connect(mapStateToProps, mapDispatchToProps)(UsernameView);
