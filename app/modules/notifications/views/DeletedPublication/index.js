import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@notifications/views/DeletedPublication/styles';
import variables from '@app/styles/variables';
import IconIon from 'react-native-vector-icons/Ionicons';
import NavigationService from '@core/utils/navigation';
import { LABELS } from '@notifications/views/DeletedPublication/constants';
import ImageSlider from 'react-native-image-slider';
import Button from '@app/modules/core/components/Button';

const DeletedPublication = ({ route }) => {
  const { photos } = route.params;
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => NavigationService.goBack()}
          >
            <IconIon
              name="md-arrow-back"
              size={25}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imagesContainer}>
            <ImageSlider
              images={photos}
              style={styles.imageSlider}
              customButtons={(position, move) =>
                photos.length > 1 && (
                  <View style={styles.photoButtomsContainer}>
                    {photos.map((image, index) => {
                      const imageSelected = position === index;
                      const imageStyle = imageSelected
                        ? styles.photoButtomSelected
                        : styles.photoButtonNotSelected;
                      return <View style={imageStyle} key={index} />;
                    })}
                  </View>
                )
              }
            />
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.subtitle}>{LABELS.subtitle}</Text>
            <Text style={styles.text}>{LABELS.text}</Text>
            <Button
              text="¡Hubo un error!"
              type="primary"
              onPress={() => console.log('Formulario')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DeletedPublication;
