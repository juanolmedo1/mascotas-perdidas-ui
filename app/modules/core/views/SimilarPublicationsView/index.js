import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationsList from '@core/components/PublicationsList';
import styles from '@core/views/SimilarPublicationsView/styles';
import variables from '@app/styles/variables';

const SimilarPublicationsView = ({ route }) => {
  const { data } = route.params;
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
        <PublicationsList data={data} />
      </ImageBackground>
    </View>
  );
};

SimilarPublicationsView.propTypes = {
  data: PropTypes.array
};

export default SimilarPublicationsView;
