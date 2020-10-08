import { connect } from 'react-redux';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import * as newPublicationActions from '@upload/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@upload/views/BreedsView/constants';
import Button from '@core/components/Button';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@upload/views/BreedsView/styles';
import variables from '@styles/variables';

const BreedsView = ({ newPublication, setPetBreed }) => {
  const renderBreedsList = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.breed}
      data={newPublication.petPrediction.breed}
      numColumns={1}
      contentContainerStyle={styles.breedList}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setPetBreed(item.label)}>
          <View
            style={
              newPublication.petBreed === item.label
                ? styles.breedElementSelected
                : styles.breedElement
            }
          >
            <Image
              resizeMode={'cover'}
              style={styles.breedImage}
              source={{ uri: item.photo }}
            />
            <Text numberOfLines={3} style={styles.breedLabel}>
              {item.labelSpanish}
            </Text>
            <Text style={styles.breedProb}>{(item.prob * 100).toFixed()}%</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );

  const navigateConfirmed = confirmedBreed => {
    if (!confirmedBreed) {
      setPetBreed('Other');
    }
    NavigationService.navigate('Filters');
  };

  const renderButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            disabled={!newPublication.petBreed}
            text={LABELS.buttons.confirm}
            onPress={() => navigateConfirmed(true)}
            type="primary"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={LABELS.buttons.skip}
            onPress={() => navigateConfirmed(false)}
            type="primary"
          />
        </View>
      </View>
    );
  };

  const renderNotDetectedTypeContent = () => {
    return (
      <View>
        <Text> No detectamos que sea un gato o perro </Text>
        <Button
          text={'Siguiente'}
          type="primary"
          onPress={() => navigateConfirmed(false)}
        />
      </View>
    );
  };

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
        {!newPublication.petPrediction ? (
          <LoadingView />
        ) : newPublication.petPrediction.breed === 0 ? (
          renderNotDetectedTypeContent()
        ) : (
          <>
            <View style={styles.introductionContainer}>
              <Text style={styles.introductionTitle}>
                {LABELS.introduction.title(newPublication.petPrediction.type)}
              </Text>
              <Text style={styles.introductionDescription}>
                {LABELS.introduction.description}
              </Text>
            </View>
            {renderBreedsList()}
            {renderButtons()}
          </>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  setPetBreed: petBreed => newPublicationActions.setPetBreed(petBreed)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedsView);
