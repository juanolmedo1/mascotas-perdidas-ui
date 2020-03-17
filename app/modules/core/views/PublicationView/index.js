import { connect } from 'react-redux';
import { Image, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
  fetchPublication,
  clearCurrentPublication
} from '@core/store/currentPublication/actions';
import LoadingView from '@core/views/LoadingView';
import PublicationHeader from '@core/components/PublicationHeader';
import styles from '@core/views/PublicationView/styles';
import PetGenderIcon from '../../components/PetGenderIcon';
import PetSizeIcon from '../../components/PetSizeIcon';

const PublicationView = ({
  route,
  getPublication,
  currentPublication,
  clearPublication
}) => {
  const { id } = route.params;

  useEffect(() => {
    getPublication(id);
    return () => {
      clearPublication();
    };
  }, [clearPublication, getPublication, id]);

  const { data } = currentPublication;

  if (!data) {
    return <LoadingView />;
  }

  const { reward, type, additionalInfo, createdAt, phoneNumber } = data;
  const { collar, photos, size, gender } = data.pet;
  const { username, profilePicture } = data.creator;
  console.log(data);

  return (
    <ScrollView style={styles.container}>
      <PublicationHeader
        type={type}
        profileImage={profilePicture}
        username={username}
      />
      <ScrollView horizontal={true} contentContainerStyle={styles.carousel}>
        {photos.map(photo => (
          <Image
            key={photo.data}
            style={styles.image}
            source={{ uri: `data:${photo.type};base64,${photo.data}` }}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
      <View style={styles.informationContainer}>
        <PetSizeIcon size={size} />
        <PetGenderIcon type={gender} />
      </View>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneTitle}>Teléfono</Text>
        <Text style={styles.phone}>{phoneNumber}</Text>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.infoTitle}>Información Adicional</Text>
        <Text style={styles.text}>{additionalInfo}</Text>
      </View>
      <View />
    </ScrollView>
  );
};

PublicationView.propTypes = {
  currentPublication: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    data: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {
  getPublication: fetchPublication,
  clearPublication: clearCurrentPublication
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationView);
