import { TouchableOpacity, View, ImageBackground } from 'react-native';
import React from 'react';
import styles from '@upload/views/TemporalPhotoView/styles';
import { LABELS } from '@upload/views/TemporalPhotoView/constants';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import variables from '@app/styles/variables';
import IconAnt from 'react-native-vector-icons/AntDesign';
import NavigationService from '@core/utils/navigation';
import { Image } from 'react-native';
import Button from '@app/modules/core/components/Button';
import { connect } from 'react-redux';
import { createTemporalPublicationRequest } from '@upload/store/actions';

const TemporalPhotoView = ({
  route,
  temporalPublicationInProgress,
  temporalPublication,
  temporalPublicationFailure,
  createTemporalPublication
}) => {
  const { data, type } = route.params;
  const createPublication = () => {
    createTemporalPublication({ data, type });
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => NavigationService.goBack()}
          style={styles.closeIcon}
        >
          <IconAnt
            name="close"
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `data:${type};base64,${data}` }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={LABELS.buttonText}
            type="primary"
            loading={temporalPublicationInProgress}
            onPress={createPublication}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  createTemporalPublication: createTemporalPublicationRequest
};

const mapStateToProps = state => ({
  temporalPublicationInProgress:
    state.newPublication.temporalPublicationInProgress,
  temporalPublication: state.newPublication.temporalPublication,
  temporalPublicationFailure: state.newPublication.temporalPublicationFailure
});

export default connect(mapStateToProps, mapDispatchToProps)(TemporalPhotoView);
