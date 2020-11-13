import React, { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { backgroundStyles, imageStyles } from '@styles/background';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import { connect } from 'react-redux';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Divider from '@core/components/Divider';
import ImageSlider from '@core/components/ImageSlider';
import PublicationHeader from '@core/components/PublicationHeader';
import UbicationMarker from '@core/components/UbicationMarker';
import styles from '@core/views/TemporalPublicationView/styles';
import NavigationService from '@core/utils/navigation';
import { LABELS } from '@core/views/TemporalPublicationView/constants';
import variables from '@app/styles/variables';
import DateUtils from '@core/utils/date';
import { getTemporalPublication } from '@core/store/temporalPublication/actions';
import IconAnt from 'react-native-vector-icons/AntDesign';
import LoadingView from '@core/views/LoadingView';
import { ScrollView } from 'react-native';

const TemporalPublicationView = ({
  route,
  fetchTemporalPublication,
  temporalPublication
}) => {
  const { id } = route.params;
  const {
    temporalPublicationInProgress,
    temporalPublicationFailed,
    data
  } = temporalPublication;

  useEffect(() => {
    fetchTemporalPublication(id);
  }, [fetchTemporalPublication, id]);

  let content = null;

  if (temporalPublicationInProgress || !data) {
    content = <LoadingView />;
  } else {
    if (temporalPublicationFailed) {
      content = (
        <View style={styles.response}>
          <View style={styles.errorContainer}>
            <IconAnt
              name="exclamation"
              size={70}
              color={variables.colors.backgroundRed}
            />
          </View>
          <Text style={styles.responseText}>{LABELS.errorText}</Text>
        </View>
      );
    } else {
      if (data) {
        const { createdAt, petPhoto } = data;
        const { username, profilePicture, phoneNumber } = data.creator;
        const { firstLatitude, firstLongitude } = data.ubication;

        content = (
          <View>
            <PublicationHeader
              profileImage={profilePicture}
              username={username}
            />
            <ImageSlider photos={[petPhoto]} />
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
                <Text style={styles.date}>
                  {DateUtils.formatDate(createdAt)}
                </Text>
              </View>
            </View>
            <Divider />
            <View style={styles.ubicationTitleContainer}>
              <Text style={styles.subtitle}>{LABELS.ubication}</Text>
              <View style={styles.divider} />
            </View>
            <View style={styles.ubicationContainer}>
              <UbicationMarker
                startLatitude={firstLatitude}
                startLongitude={firstLongitude}
                startLatitudeDelta={0.01}
                startLongitudeDelta={0.01}
              />
            </View>
          </View>
        );
      }
    }
  }

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {content}
      </ScrollView>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  fetchTemporalPublication: getTemporalPublication
};

const mapStateToProps = state => ({
  temporalPublication: state.temporalPublication
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemporalPublicationView);
