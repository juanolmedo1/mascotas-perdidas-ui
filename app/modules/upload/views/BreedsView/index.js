import { connect } from 'react-redux';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import * as newPublicationActions from '@upload/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import {
  LABELS,
  INAPPROPRIATE_IMAGE_CONSTANT
} from '@upload/views/BreedsView/constants';
import Button from '@core/components/Button';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@upload/views/BreedsView/styles';
import variables from '@styles/variables';
import Divider from '@app/modules/core/components/Divider';
import BreedsLoadingView from '@upload/views/BreedsLoadingView';

const BreedsView = ({
  newPublication,
  getCommonBreedAttributes,
  setPetBreed
}) => {
  const renderBreedsList = () => (
    <View style={styles.contentContainer}>
      {newPublication.petPrediction.breed.map(item => (
        <View key={item.label}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => confirmBreed(item.label)}
          >
            <View style={styles.breedElement}>
              <Image
                resizeMode={'cover'}
                style={styles.breedImage}
                source={{ uri: item.photo }}
              />
              <Text numberOfLines={3} style={styles.breedLabel}>
                {item.labelSpanish}
              </Text>
              <Text style={styles.breedProb}>
                {(item.prob * 100).toFixed()}%
              </Text>
            </View>
          </TouchableOpacity>
          <Divider />
        </View>
      ))}
      <TouchableOpacity
        key={LABELS.breed.other}
        activeOpacity={0.8}
        onPress={() => confirmBreed(LABELS.breed.other)}
      >
        <View style={styles.otherBreedElement}>
          <View style={styles.otherBreedContainer}>
            <Text style={styles.otherBreedLabel}>
              Ninguna se parece a mi mascota
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const confirmBreed = breed => {
    setPetBreed(breed);
    if (breed !== LABELS.breed.other) {
      getCommonBreedAttributes(breed);
    }
    NavigationService.navigate('Filters');
  };

  const renderNotDetectedTypeContent = () => {
    return (
      <View style={styles.noDetectionContainer}>
        <View style={styles.noDetectionMessageContainer}>
          <View style={styles.noDetectionIconsContainer}>
            <IconAwesome5
              name="dog"
              size={40}
              style={styles.noDetectionIcon}
              color={variables.colors.backgroundDarkGrey}
            />
            <IconAwesome5
              name="question-circle"
              size={110}
              style={styles.noDetectionIcon}
              color={variables.colors.backgroundOrange}
            />
            <IconAwesome5
              name="cat"
              size={40}
              style={styles.noDetectionIcon}
              color={variables.colors.backgroundDarkGrey}
            />
          </View>
          <View style={styles.noDetectionTextContainer}>
            <Text style={styles.noDetectionText}>
              {LABELS.noDetection.text}
            </Text>
          </View>
        </View>
        <View style={styles.noDetectionButtonContainer}>
          <Button
            text={LABELS.buttons.next}
            type="primary"
            onPress={() => confirmBreed(LABELS.breed.other)}
          />
        </View>
      </View>
    );
  };

  const renderInappropriateContent = () => {
    return (
      <View style={styles.inappropriateContainer}>
        <Text style={styles.inappropriateTitle}>
          {LABELS.inappropriateTitle}
        </Text>
        <View style={styles.errorContainer}>
          <IconAnt
            name="exclamation"
            size={100}
            color={variables.colors.backgroundRed}
          />
        </View>
        <Text style={styles.inappropriateText}>{LABELS.inappropriateText}</Text>
      </View>
    );
  };

  return (
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
      </View>
      {!newPublication.petPrediction ? (
        <BreedsLoadingView />
      ) : newPublication.petPrediction.type === INAPPROPRIATE_IMAGE_CONSTANT ? (
        renderInappropriateContent()
      ) : newPublication.petPrediction.breed.length === 0 ? (
        renderNotDetectedTypeContent()
      ) : (
        <View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionTitle}>
              {LABELS.introduction.title(newPublication.petPrediction.type)}
            </Text>
            <Text style={styles.introductionDescription}>
              {LABELS.introduction.description}
            </Text>
          </View>
          {renderBreedsList()}
        </View>
      )}
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  getCommonBreedAttributes: petBreed =>
    newPublicationActions.getCommonBreedAttributesValuesRequest(petBreed),
  setPetBreed: petBreed => newPublicationActions.setPetBreed(petBreed)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedsView);
