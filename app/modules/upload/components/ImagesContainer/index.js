import { View, Image } from 'react-native';
import React from 'react';
import styles from '@upload/components/ImagesContainer/styles';

const ImagesContainer = ({ images }) => {
  const firstImage = images[0] ? (
    <Image
      source={{ uri: `data:${images[0].mime};base64,${images[0].data}` }}
      style={styles.image}
    />
  ) : null;
  const secondImage = images[1] ? (
    <Image
      source={{ uri: `data:${images[1].mime};base64,${images[1].data}` }}
      style={styles.image}
    />
  ) : null;
  const thirdImage = images[2] ? (
    <Image
      source={{ uri: `data:${images[2].mime};base64,${images[2].data}` }}
      style={styles.image}
    />
  ) : null;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{firstImage}</View>
      <View style={styles.imageContainer}>{secondImage}</View>
      <View style={styles.imageContainer}>{thirdImage}</View>
    </View>
  );
};

export default ImagesContainer;
