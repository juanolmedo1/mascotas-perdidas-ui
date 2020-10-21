import { TouchableOpacity, View } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import styles from '@home/components/HomeViewToggler/styles';
import variables from '@styles/variables';

const homeViewToggler = ({
  mapViewActive,
  onListViewSelected,
  onMapViewSelected
}) => {
  const listStyle = !mapViewActive
    ? styles.viewOptionActive
    : styles.viewOptionInactive;
  const mapStyle = mapViewActive
    ? styles.viewOptionActive
    : styles.viewOptionInactive;
  return (
    <View style={styles.viewOptionsContainer}>
      <TouchableOpacity
        onPress={onListViewSelected}
        activeOpacity={0.8}
        style={[listStyle, styles.leftIcon]}
      >
        <IconAwesome
          name="list-ul"
          size={18}
          color={
            !mapViewActive
              ? variables.colors.backgroundBlack
              : variables.colors.backgroundLightGrey
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onMapViewSelected}
        activeOpacity={0.8}
        style={[mapStyle, styles.rightIcon]}
      >
        <IconAwesome
          name="map-o"
          size={18}
          color={
            mapViewActive
              ? variables.colors.backgroundBlack
              : variables.colors.backgroundLightGrey
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default homeViewToggler;
