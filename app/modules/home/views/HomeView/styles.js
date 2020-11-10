import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    alignItems: 'center'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
    marginTop: 5
  },
  callout: {
    flex: 1,
    alignItems: 'center',
    height: 150,
    width: 150
  },
  calloutImage: {
    flex: 1,
    width: 100,
    height: 100
  },
  calloutText: {
    flex: 1
  },
  column: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ubicationTextContainer: {
    marginHorizontal: variables.spacings.L,
    marginBottom: variables.spacings.S,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ubicationText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textBlack,
    textAlign: 'center'
  },
  iconsContainer: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  },
  title: {
    fontSize: fonts.sizes.XL,
    ...fonts.weights.regular
  }
});
