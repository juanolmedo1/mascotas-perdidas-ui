import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: variables.spacings.XS,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerFull: {
    flex: 1,
    paddingTop: variables.spacings.XXL
  }
});
