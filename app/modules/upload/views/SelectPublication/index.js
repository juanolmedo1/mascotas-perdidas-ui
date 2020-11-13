import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@upload/views/SelectPublication/styles';
import variables from '@app/styles/variables';
import Divider from '@app/modules/core/components/Divider';
import NavigationService from '@core/utils/navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import { LABELS } from '@upload/views/SelectPublication/constants';

const SelectPublication = () => {
  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
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
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => NavigationService.navigate('CameraView')}
          style={styles.temporalPublicationContainer}
        >
          <Text style={styles.title}>{LABELS.temporalTitle}</Text>
          <MaterialIcon
            name="hours-24"
            size={60}
            style={styles.iconTemporal}
            color={variables.colors.backgroundOrange}
          />
          <Text style={styles.description}>{LABELS.temporalDescription}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => NavigationService.navigate('Upload')}
          style={styles.permanentPublicationContainer}
        >
          <Text style={styles.title}>{LABELS.permanentTitle}</Text>
          <MaterialIcon
            name="infinity"
            size={60}
            style={styles.iconPermanent}
            color={variables.colors.backgroundOrange}
          />
          <Text style={styles.description}>{LABELS.permanentDescription}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SelectPublication;
