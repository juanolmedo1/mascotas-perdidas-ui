import { connect } from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/SimilarPublicationsView/constants';
import Divider from '@core/components/Divider';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@core/views/SimilarPublicationsView/styles';
import variables from '@app/styles/variables';

const SimilarPublicationsView = ({
  currentPublication,
  getSimilarPublications,
  route
}) => {
  const { id } = route.params;
  const {
    similarPublications,
    similarPublicationsRequestFailed,
    similarPublicationsRequestInProgress
  } = currentPublication;
  const { publicationsViewed, publicationsNotViewed } =
    similarPublications || {};

  useEffect(() => {
    getSimilarPublications(id);
  }, [getSimilarPublications, id]);

  const renderContent = () => {
    const hasPublicationsToShow =
      (publicationsViewed && publicationsViewed.length > 0) ||
      (publicationsNotViewed && publicationsNotViewed.length > 0);
    if (similarPublicationsRequestInProgress) {
      return <LoadingView />;
    }
    if (!hasPublicationsToShow || similarPublicationsRequestFailed) {
      return <PublicationsList data={[]} />;
    }
    return publicationsNotViewed.length > 0 ? (
      <ScrollView>
        <PublicationsList scrollEnabled={false} data={publicationsNotViewed} />
        <Divider />
        <View style={styles.upToDateContainer}>
          <View style={styles.iconContainer}>
            <Feather
              name="check"
              size={40}
              color={variables.colors.backgroundGreen}
            />
          </View>
          <Text style={styles.upToDateText}> {LABELS.upToDateText} </Text>
        </View>
        <Divider />
        <PublicationsList scrollEnabled={false} data={publicationsViewed} />
      </ScrollView>
    ) : (
      <PublicationsList data={publicationsViewed} />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
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
          <Text style={styles.title}>Publicaciones similares</Text>
        </View>
        <Divider />
        {renderContent()}
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = {
  getSimilarPublications: id =>
    currentPublicationActions.getSimilarPublications(id)
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarPublicationsView);
