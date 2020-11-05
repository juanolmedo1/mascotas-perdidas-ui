import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: variables.spacings.S
  },
  candidatePublicationContainer: {
    marginHorizontal: variables.spacings.M
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  introductionContainer: {
    marginHorizontal: variables.spacings.L
  },
  introductionTitle: {
    marginVertical: variables.spacings.S,
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.S,
    textAlign: 'center'
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  }
});
