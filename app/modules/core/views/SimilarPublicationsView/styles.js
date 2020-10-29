import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
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
  iconContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderGreen,
    borderRadius: 45,
    marginBottom: variables.spacings.S
  },
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  },
  upToDateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  upToDateText: {
    color: variables.colors.textGreen
  }
});
