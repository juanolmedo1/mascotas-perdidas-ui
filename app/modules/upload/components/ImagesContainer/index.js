import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '@upload/components/ImagesContainer/styles';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import variables from '@styles/variables';

const ImagesContainer = ({ images, openPicker }) => {
  const firstImage = images[0] ? (
    <Image
      source={{ uri: `data:${images[0].mime};base64,${images[0].data}` }}
      style={styles.image}
    />
  ) : (
    <IconSimple
      name="camera"
      size={36}
      color={variables.colors.backgroundLightGrey}
    />
  );
  const secondImage = images[1] ? (
    <Image
      source={{ uri: `data:${images[1].mime};base64,${images[1].data}` }}
      style={styles.image}
    />
  ) : (
    <IconSimple
      name="camera"
      size={36}
      color={variables.colors.backgroundLightGrey}
    />
  );
  const thirdImage = images[2] ? (
    <Image
      source={{ uri: `data:${images[2].mime};base64,${images[2].data}` }}
      style={styles.image}
    />
  ) : (
    <IconSimple
      name="camera"
      size={36}
      color={variables.colors.backgroundLightGrey}
    />
  );
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={openPicker}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>{firstImage}</View>
      <View style={styles.imageContainer}>{secondImage}</View>
      <View style={styles.imageContainer}>{thirdImage}</View>
    </TouchableOpacity>
  );
};

export default ImagesContainer;
