import { StyleSheet } from 'react-native';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'red'
  },
  firstTitle: {
    height: 20,
    width: 220,
    borderRadius: 4,
    marginBottom: variables.spacings.S,
    marginLeft: variables.spacings.S
  },
  title: {
    height: 20,
    width: 120,
    borderRadius: 4,
    marginLeft: variables.spacings.L
  },
  roundedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    marginVertical: variables.spacings.XS
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    marginVertical: variables.spacings.XS
  },
  roundedItemContainer: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareItemContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    height: 70,
    width: 70,
    borderRadius: 20
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  value: {
    height: 14,
    width: 50,
    borderRadius: 4,
    marginTop: variables.spacings.L
  }
});
