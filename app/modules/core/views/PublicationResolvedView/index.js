import { connect } from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationResolvedView/constants';
import Button from '@core/components/Button';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import PUBLICATION_ENTITY from '@entities/Publication';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationCandidateCard from '@core/components/PublicationCandidateCard';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@core/views/PublicationResolvedView/styles';
import variables from '@app/styles/variables';

const PublicationResolvedView = ({
  currentPublication,
  getSimilarPublications,
  route
}) => {
  const { id, publicationType } = route.params;
  const {
    similarPublications,
    similarPublicationsRequestFailed,
    similarPublicationsRequestInProgress
  } = currentPublication;
  const { publicationsViewed, publicationsNotViewed } =
    similarPublications || {};

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    getSimilarPublications(id);
  }, [getSimilarPublications, id]);

  useEffect(() => {
    const hasPublicationsToShow =
      (publicationsViewed && publicationsViewed.length > 0) ||
      (publicationsNotViewed && publicationsNotViewed.length > 0);
    if (
      !similarPublicationsRequestFailed &&
      !similarPublicationsRequestInProgress &&
      !hasPublicationsToShow
    ) {
      NavigationService.navigate('PublicationResolved_Map', {
        id: id
      });
    }
  }, [
    similarPublicationsRequestInProgress,
    similarPublicationsRequestFailed,
    similarPublications,
    publicationsViewed,
    publicationsNotViewed,
    id
  ]);

  const onSelectedCandidateHandler = (selectedCandidateId, checkValue) => {
    if (checkValue) {
      setSelectedCandidate(selectedCandidateId);
    } else {
      setSelectedCandidate(null);
    }
  };

  const onContinueHandler = () => {
    const isLostPublication = publicationType === PUBLICATION_ENTITY.types.lost;
    const hasSelectedCandidate = selectedCandidate !== null;
    if (hasSelectedCandidate) {
      console.log(
        'desactivar publicación y enviar notificación al dueño de la publicación'
      );
    } else {
      if (isLostPublication) {
        NavigationService.navigate('PublicationResolved_Map', { id: id });
      } else {
        console.log('desactivar publicación');
      }
    }
  };

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
    const totalSimilarPublications = publicationsNotViewed
      ? [...publicationsNotViewed, ...publicationsViewed]
      : [...publicationsViewed];
    return (
      <>
        <ScrollView>
          {totalSimilarPublications.map(item => (
            <PublicationCandidateCard
              key={item.id}
              id={item.id}
              date={item.createdAt}
              username={item.creator.username}
              profileImage={item.creator.profilePicture.data}
              imageShown={item.pet.photos[0].data}
              selected={item.id === selectedCandidate}
              onSelect={onSelectedCandidateHandler}
            />
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            text={LABELS.continueButton}
            disabled={false}
            rightArrow={true}
            onPress={onContinueHandler}
            type="primary"
          />
        </View>
      </>
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
          <Text style={styles.title} />
        </View>
        <View style={styles.introductionContainer}>
          <Text style={styles.introductionTitle}>
            {LABELS.introductionText}
          </Text>
        </View>
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
)(PublicationResolvedView);
