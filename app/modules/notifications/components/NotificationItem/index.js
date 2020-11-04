import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import NavigationService from '@core/utils/navigation';
import styles from '@notifications/components/NotificationItem/styles';
import DateUtils from '@core/utils/date';

const NotificationItem = ({
  publicationId,
  type,
  photo,
  username,
  userPhoto,
  createdAt
}) => {
  const posibleTitles = {
    POSSIBLE_MATCHING: '¡Posible Coincidencia!',
    CONFIRM_PET_FOUND: 'Confirmación requerida'
  };
  const posibleDescriptions = {
    POSSIBLE_MATCHING: `@${username} creó una publicación que puede coincidir con una tuya. Échale un vistazo!`,
    CONFIRM_PET_FOUND:
      'Alguien encontró su mascota y puede ser por una publicación tuya.'
  };
  const title = posibleTitles[type];
  const description = posibleDescriptions[type];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        NavigationService.navigate('Publication', { id: publicationId })
      }
      activeOpacity={0.8}
    >
      <View style={styles.userImageContainer}>
        <Image style={styles.userImage} source={{ uri: userPhoto }} />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.creationDate}>
            {DateUtils.differenceResumed(createdAt)}
          </Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photo }} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
