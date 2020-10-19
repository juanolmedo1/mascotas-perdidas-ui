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
  return (
    <View style={styles.viewOptionsContainer}>
      <TouchableOpacity
        onPress={onListViewSelected}
        style={
          !mapViewActive ? styles.viewOptionActive : styles.viewOptionInactive
        }
      >
        <IconAwesome
          name="list-ul"
          size={18}
          style={styles.viewOptionIcon}
          color={
            !mapViewActive
              ? variables.colors.backgroundBlack
              : variables.colors.backgroundLightGrey
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onMapViewSelected}
        style={
          mapViewActive ? styles.viewOptionActive : styles.viewOptionInactive
        }
      >
        <IconAwesome
          name="map-o"
          size={18}
          style={styles.viewOptionIcon}
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
