import { connect } from 'react-redux';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
  fetchPublication,
  clearCurrentPublication
} from '@core/store/currentPublication/actions';
import LoadingView from '@core/views/LoadingView';
import PublicationHeader from '@core/components/PublicationHeader';
import styles from '@core/views/PublicationView/styles';
import PetGenderIcon from '@core/components/PetGenderIcon';
import PetSizeIcon from '@core/components/PetSizeIcon';
import PetHasCollarIcon from '@core/components/PetHasCollarIcon';
import PetHasRewardIcon from '@core/components/PetHasRewardIcon';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import variables from '@app/styles/variables';
import PUBLICATION_ENTITY from '@entities/Publication';
import DateUtils from '@core/utils/date';
import Divider from '@core/components/Divider';
import NavigationService from '@core/utils/navigation';
import IconIon from 'react-native-vector-icons/Ionicons';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import { backgroundStyles, imageStyles } from '@styles/background';

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

  const { data, requestInProgress } = currentPublication;

  let content = null;

  if (requestInProgress) {
    content = <LoadingView />;
  } else {
    if (data) {
      const { reward, type, additionalInfo, createdAt, phoneNumber } = data;
      const { collar, photos, size, gender } = data.pet;
      const { username, profilePicture } = data.creator;

      content = (
        <View>
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
          <Divider />
          <View style={styles.block}>
            <View style={styles.phoneNumberContainer}>
              <IconSimple
                name="phone"
                size={20}
                color={variables.colors.backgroundBlue}
              />
              <Text style={styles.phone}>{phoneNumber}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{DateUtils.formatDate(createdAt)}</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.iconsContainer}>
            <PetSizeIcon size={size} />
            <PetGenderIcon type={gender} />
          </View>
          <View style={styles.iconsContainer}>
            {type !== PUBLICATION_ENTITY.types.adoption && (
              <PetHasCollarIcon hasCollar={collar} />
            )}
            {reward && <PetHasRewardIcon />}
          </View>

          {Boolean(additionalInfo) && (
            <View>
              <Divider />
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.infoTitle}>Información Adicional</Text>
                <Text style={styles.text}>{additionalInfo}</Text>
              </View>
            </View>
          )}
        </View>
      );
    }
  }

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView>
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
          <Text style={styles.title}>Publicación</Text>
        </View>
        {content}
      </ScrollView>
    </ImageBackground>
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
