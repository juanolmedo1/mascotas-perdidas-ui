import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

const baseBullet = {
  width: 8,
  height: 8,
  borderRadius: 4,
  marginHorizontal: variables.spacings.XXS,
  backgroundColor: variables.colors.backgroundWhite
};

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  image: {
    flex: 1,
    height: 250
  },
  bulletContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0
  },
  selectedBullet: {
    ...baseBullet,
    opacity: 1
  },
  notSelectedBullet: {
    ...baseBullet,
    opacity: 0.4
  }
});
