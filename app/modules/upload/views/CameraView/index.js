import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/views/CameraView/styles';
import { LABELS } from '@upload/views/CameraView/constants';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationService from '@core/utils/navigation';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import variables from '@app/styles/variables';

const CameraView = () => {
  const [cameraRef, setCameraRef] = useState(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      setCameraRef(null);
      NavigationService.navigate('TemporalPhoto', {
        data: data.base64,
        type: 'image/jpg'
      });
    }
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: false,
      includeBase64: true,
      mediaType: 'photo'
    })
      .then(image => {
        NavigationService.navigate('TemporalPhoto', {
          data: image.data,
          type: image.mime
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => NavigationService.goBack()}
        style={styles.closeIcon}
      >
        <IconIon
          name="md-arrow-back"
          size={25}
          color={variables.colors.backgroundOrange}
        />
      </TouchableOpacity>
      <RNCamera
        ref={ref => {
          setCameraRef(ref);
        }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: `${LABELS.androidPermission.title}`,
          message: `${LABELS.androidPermission.message}`,
          buttonPositive: `${LABELS.androidPermission.buttonPositive}`,
          buttonNegative: `${LABELS.androidPermission.buttonNegative}`
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={openImagePicker}
          style={styles.galleryButton}
        >
          <IconEntypo
            name="images"
            size={30}
            color={variables.colors.backgroundWhite}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <IconSimple
            name="camera"
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraView;
