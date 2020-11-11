import { View, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '@core/components/ImageSlider/styles';

const ImageSlider = ({ photos }) => {
  const [interval, setInterval] = useState(1);
  const [width, setWidth] = useState(0);

  const init = newWidth => {
    setWidth(newWidth);
  };

  const getInterval = offset => {
    for (let i = 1; i <= photos.length; i++) {
      const comparision = (width / photos.length) * i;
      if (offset + 1 < comparision) {
        return i;
      }
      if (i === photos.length) {
        return i;
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        contentContainerStyle={{
          width: `${100 * photos.length}%`
        }}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        pagingEnabled
        decelerationRate="fast"
      >
        {photos.map(photo => (
          <Image
            key={photo}
            resizeMode="cover"
            source={{ uri: photo }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      {photos.length > 1 && (
        <View style={styles.bulletContainer}>
          {photos.map((photo, index) => {
            const bulletStyle =
              index + 1 === interval
                ? styles.selectedBullet
                : styles.notSelectedBullet;
            return <View key={photo} style={bulletStyle} />;
          })}
        </View>
      )}
    </View>
  );
};

export default ImageSlider;
