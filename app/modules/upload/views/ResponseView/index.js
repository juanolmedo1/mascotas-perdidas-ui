import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@upload/views/ResponseView/styles';
import PUBLICATION_ENTITY from '@entities/Publication';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import variables from '@app/styles/variables';
import SimilarPublications from '@upload/components/SimilarPublications';

const ResponseView = ({ newPublication }) => {
  const {
    requestFailed,
    similarPublications,
    publicationType
  } = newPublication;

  const iconContainerStyle = requestFailed
    ? styles.errorContainer
    : styles.checkContainer;

  const icon = requestFailed ? (
    <IconAnt
      name="exclamation"
      size={70}
      color={variables.colors.backgroundRed}
    />
  ) : (
    <Feather name="check" size={70} color={variables.colors.backgroundGreen} />
  );
  const responseText = requestFailed
    ? 'Se produjo un error al cargar la publicación.'
    : 'Publicación cargada exitosamente.';

  return (
    <View style={styles.container}>
      <View style={styles.responseContainer}>
        <View style={styles.close}>
          <TouchableOpacity style={styles.icon}>
            <IconAnt
              name="close"
              size={30}
              color={variables.colors.backgroundDarkGrey}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.response}>
          <View style={iconContainerStyle}>{icon}</View>
          <Text style={styles.title}>{responseText}</Text>
        </View>
      </View>
      {!requestFailed &&
        similarPublications &&
        publicationType !== PUBLICATION_ENTITY.types.adoption && (
          <SimilarPublications
            publicationType={publicationType}
            publications={similarPublications}
          />
        )}
    </View>
  );
};

ResponseView.propTypes = {
  newPublication: PropTypes.shape({
    locationId: PropTypes.string,
    petGender: PropTypes.string,
    petType: PropTypes.string,
    photosArray: PropTypes.arrayOf(PropTypes.string),
    provinceId: PropTypes.string,
    publicationType: PropTypes.string,
    userId: PropTypes.string,
    requestFailed: PropTypes.bool,
    requestInProgress: PropTypes.bool,
    similarPublications: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

const mapDispatchToProps = {};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseView);
