import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

const photoButtonBase = {
  backgroundColor: variables.colors.backgroundWhite,
  height: 8,
  width: 8,
  borderRadius: 4,
  marginHorizontal: 3
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  },
  subtitle: {
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular,
    textAlign: 'center',
    marginTop: variables.spacings.XL,
    marginBottom: variables.spacings.M
  },
  text: {
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular,
    paddingHorizontal: variables.spacings.M,
    textAlign: 'center',
    marginBottom: variables.spacings.XL
  },
  content: {
    flex: 1
  },
  imagesContainer: {
    flex: 1
  },
  imageSlider: {
    height: 250
  },
  photoButtomsContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 30
  },
  photoButtomSelected: {
    ...photoButtonBase,
    opacity: 1
  },
  photoButtonNotSelected: {
    ...photoButtonBase,
    opacity: 0.4
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8
  },
  informationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
