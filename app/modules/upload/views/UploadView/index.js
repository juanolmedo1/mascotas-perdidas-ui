import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '@upload/views/UploadView/styles';
import Button from '@core/components/Button';
import Dropdown from '@core/components/Dropdown';
import NavigationService from '@core/utils/navigation';
import ImagePicker from 'react-native-image-crop-picker';
import ImagesContainer from '@upload/components/ImagesContainer';
import { fetchProvinces, fetchLocations } from '@core/store/ubication/actions';
import LoadingView from '@core/views/LoadingView';

const UploadView = ({ getProvinces, getLocations, ubications, session }) => {
  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true,
      mediaType: 'photo'
    })
      .then(images => {
        const MAX_SIZE = 3;
        const imagesMapped = images.slice(0, MAX_SIZE).map(image => {
          return { data: image.data, mime: image.mime, path: image.path };
        });
        setImages(imagesMapped);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const {
    profileInfo: { ubication }
  } = session;

  useEffect(() => {
    getProvinces();
    getLocations(ubication.province.id);
  }, [getLocations, getProvinces, ubication.province.id]);

  const [province, setProvince] = useState(ubication.province.id);
  const [location, setLocation] = useState(ubication.location.id);
  const [images, setImages] = useState();

  const updateProvince = value => {
    setProvince(value);
    getLocations(value);
  };

  const updateLocation = value => {
    setLocation(value);
  };

  const { provinces, locations } = ubications;

  if (!provinces.length || !locations.length) {
    return <LoadingView />;
  }

  return (
    <View style={styles.container}>
      <ImagesContainer images={images} />
      <Button
        text="+ Cargar fotos "
        onPress={openImagePicker}
        type="tertiary"
      />
      <View>
        <Dropdown
          data={provinces}
          changeValue={updateProvince}
          selectedValue={province}
          title="Provincia"
        />
        <Dropdown
          data={locations}
          changeValue={updateLocation}
          selectedValue={location}
          title="Localidad"
        />
      </View>
      <Button
        text="Continuar"
        onPress={() => NavigationService.navigate('Filters')}
        type="primary"
        rightArrow
      />
    </View>
  );
};

UploadView.propTypes = {
  getProvinces: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  ubications: PropTypes.shape({
    provincesInProgress: PropTypes.bool,
    provincesFailed: PropTypes.bool,
    provinces: PropTypes.array,
    locationsInProgress: PropTypes.bool,
    locationsFailed: PropTypes.bool,
    locations: PropTypes.array
  }).isRequired
};

const mapDispatchToProps = {
  getProvinces: fetchProvinces,
  getLocations: fetchLocations
};

const mapStateToProps = state => ({
  ubications: state.ubications,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadView);
