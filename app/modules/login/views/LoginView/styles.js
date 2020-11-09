import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.backgroundDarkOrange,
    alignItems: 'center'
  },
  logoContainer: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: variables.spacings.L
  },
  leftPaw: {
    transform: [
      {
        rotateZ: '-20deg'
      }
    ],
    marginRight: 5
  },
  rightPaw: {
    transform: [
      {
        rotateZ: '20deg'
      }
    ],
    marginLeft: 5,
    marginBottom: 80
  },
  inputsContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    width: 260,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: variables.colors.borderWhite,
    borderRadius: 4,
    marginTop: variables.spacings.M
  },
  input: {
    flex: 1,
    height: 40,
    color: variables.colors.textWhite,
    letterSpacing: 1,
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular,
    paddingHorizontal: variables.spacings.S
  },
  iconContainer: {
    width: 30,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: variables.colors.borderWhite
  },
  buttonsContainer: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  errorContainer: {
    width: 260,
    height: 10,
    marginTop: variables.spacings.XXS
  },
  errorMessage: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textWhite,
    textAlign: 'right'
  },
  loginButton: {
    marginTop: 40
  },
  registerButton: {
    marginTop: variables.spacings.L
  },
  registerText: {
    color: variables.colors.textWhite,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  },
  forgotPasswordButton: {
    position: 'absolute',
    bottom: variables.spacings.L
  },
  forgotPasswordText: {
    color: variables.colors.textWhite,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
