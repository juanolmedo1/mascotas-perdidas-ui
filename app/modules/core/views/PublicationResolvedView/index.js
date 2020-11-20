import { connect } from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationResolvedView/constants';
import Button from '@core/components/Button';
import NavigationService from '@core/utils/navigation';
import PUBLICATION_ENTITY from '@entities/Publication';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationCandidateCard from '@core/components/PublicationCandidateCard';
import styles from '@core/views/PublicationResolvedView/styles';
import variables from '@app/styles/variables';

const PublicationResolvedView = ({ currentPublication, route }) => {
  const { id, publicationType, publicationPhoto } = route.params;
  const { resolvedCandidates } = currentPublication;
  const { publicationsViewed, publicationsNotViewed } =
    resolvedCandidates || {};
  const isLostPublication = publicationType === PUBLICATION_ENTITY.types.lost;

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const onSelectedCandidateHandler = (selectedCandidateId, checkValue) => {
    if (checkValue) {
      setSelectedCandidate(selectedCandidateId);
    } else {
      setSelectedCandidate(null);
    }
  };

  const onContinueHandler = () => {
    const hasSelectedCandidate = selectedCandidate !== null;
    const navigateParams = {
      id: id,
      publicationType: publicationType,
      publicationPhoto: publicationPhoto
    };
    if (hasSelectedCandidate) {
      NavigationService.navigate('PublicationResolved_Response', {
        ...navigateParams,
        notifyPublicationId: selectedCandidate
      });
    } else {
      if (isLostPublication) {
        NavigationService.navigate('PublicationResolved_Map', navigateParams);
      } else {
        NavigationService.navigate(
          'PublicationResolved_Response',
          navigateParams
        );
      }
    }
  };

  const renderContent = () => {
    const totalCandidates = [...publicationsNotViewed, ...publicationsViewed];
    return (
      <>
        <ScrollView>
          {totalCandidates.map(item => (
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

const mapStateToProps = state => ({
  currentPublication: state.currentPublication
});

export default connect(mapStateToProps)(PublicationResolvedView);
