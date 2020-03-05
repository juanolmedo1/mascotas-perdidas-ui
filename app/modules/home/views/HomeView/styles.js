import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  list: {
    backgroundColor: variables.colors.backgroundWhite,
    alignItems: 'center'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
    marginTop: 5
  },
  column: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
    marginBottom: 10
  }
});
