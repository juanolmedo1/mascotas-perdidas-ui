import { View, Image } from 'react-native';
import React from 'react';
import styles from '@upload/components/ImagesContainer/styles';

const ImagesContainer = ({ images }) => {
  return (
    <View style={styles.container}>
      {Boolean(images.length) &&
        images.map(image => (
          <Image
            key={image.path}
            source={{ uri: `data:${image.mime};base64,${image.data}` }}
            style={styles.image}
          />
        ))}
    </View>
  );
};

export default ImagesContainer;
