import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { backgroundStyles, imageStyles } from '@styles/background';
import Feather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@upload/views/TemporalResponseView/styles';
import variables from '@app/styles/variables';

const TemporalResponseView = ({
  temporalPublication,
  temporalPublicationFailure
}) => {
  const close = () => {
    NavigationService.reset(0, 'SelectPublication');
    NavigationService.navigate('Home');
  };

  const iconContainerStyle = temporalPublicationFailure
    ? styles.errorContainer
    : styles.checkContainer;

  const icon = temporalPublicationFailure ? (
    <IconAnt
      name="exclamation"
      size={70}
      color={variables.colors.backgroundRed}
    />
  ) : (
    <Feather name="check" size={70} color={variables.colors.backgroundGreen} />
  );
  const responseText = temporalPublicationFailure
    ? 'Se produjo un error al cargar la publicación. Por favor, vuelva a intentarlo más tarde.'
    : 'Publicación cargada exitosamente.';

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.responseContainer}>
        <View style={styles.close}>
          <TouchableOpacity style={styles.icon} onPress={close}>
            <IconAnt
              name="close"
              size={30}
              color={variables.colors.backgroundDarkGrey}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.response}>
          <View style={iconContainerStyle}>{icon}</View>
          <Text style={styles.title}>{responseText}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.temporalPublicationContainer}
            onPress={() =>
              NavigationService.navigate('TemporalPublication', {
                id: temporalPublication.id
              })
            }
          >
            <Text style={styles.temporalPublicationText}>Ver publicación</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  temporalPublication: state.newPublication.temporalPublication,
  temporalPublicationFailure: state.newPublication.temporalPublicationFailure
});

export default connect(mapStateToProps)(TemporalResponseView);
