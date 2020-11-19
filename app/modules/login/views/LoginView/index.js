import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchLogin } from '@login/store/actions';
import styles from '@login/views/LoginView/styles';
import Button from '@core/components/Button';
import variables from '@styles/variables';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '@core/utils/navigation';
import { fetchLoginFailure } from '@login/store/actions';

const LoginView = ({ fetchLoginFunc, session, addProfileError }) => {
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();

  const {
    requestProfileInProgress,
    requestProfileError,
    requestLoggedUserInProgress
  } = session;

  const handleLogin = () => {
    if (username && password) {
      fetchLoginFunc({ username, password });
    } else {
      if (!username) {
        addProfileError({ username: 'Este campo es obligatorio' });
      } else {
        if (!password) {
          addProfileError({ password: 'Este campo es obligatorio' });
        }
      }
    }
  };

  return (
    <LinearGradient colors={['#C77C23', '#955508']} style={styles.container}>
      <View style={styles.logoContainer}>
        <IconMaterial
          style={styles.leftPaw}
          name="pets"
          size={80}
          color={variables.colors.backgroundWhite}
        />
        <IconMaterial
          style={styles.rightPaw}
          name="pets"
          size={80}
          color={variables.colors.backgroundWhite}
        />
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <IconSimple
              name={'user'}
              size={16}
              color={variables.colors.backgroundWhite}
            />
          </View>
          <TextInput
            style={styles.input}
            value={username}
            placeholder={'Usuario'}
            placeholderTextColor={variables.colors.textWhite}
            onChangeText={text => onChangeUsername(text)}
          />
        </View>
        <View style={styles.errorContainer}>
          {requestProfileError.username && (
            <Text style={styles.errorMessage}>
              {requestProfileError.username}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <IconSimple
              name={'lock'}
              size={16}
              color={variables.colors.backgroundWhite}
            />
          </View>
          <TextInput
            style={styles.input}
            value={password}
            placeholder={'Contraseña'}
            placeholderTextColor={variables.colors.textWhite}
            secureTextEntry={true}
            onChangeText={text => onChangePassword(text)}
          />
        </View>

        <View style={styles.errorContainer}>
          {requestProfileError.password && (
            <Text style={styles.errorMessage}>
              {requestProfileError.password}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.loginButton}>
          <Button
            text="Ingresar"
            loading={requestProfileInProgress || requestLoggedUserInProgress}
            type="secondary"
            onPress={handleLogin}
          />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => NavigationService.navigate('RegisterNavigator')}
        >
          <Text style={styles.registerText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

LoginView.propTypes = {
  fetchLoginFunc: PropTypes.func.isRequired,
  session: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    profileInfo: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {
  fetchLoginFunc: fetchLogin,
  addProfileError: fetchLoginFailure
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
