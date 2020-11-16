import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import DateUtils from '@core/utils/date';
import styles from '@notifications/components/NotificationItem/styles';

const NotificationItem = ({
  type,
  photo,
  username,
  userPhoto,
  createdAt,
  onPress
}) => {
  const posibleTitles = {
    POSSIBLE_MATCHING: '¡Posible Coincidencia!',
    DOBLE_CONFIRMATION: 'Confirmación requerida',
    DELETED_FOR_COMPLAINTS: 'Publicación eliminada',
    TEMPORAL_PUBLICATION: 'Publicación temporal'
  };
  const posibleDescriptions = {
    POSSIBLE_MATCHING: `@${username} creó una publicación que puede coincidir con una tuya. ¡Échale un vistazo!`,
    DOBLE_CONFIRMATION: `@${username} indicó que sus publicaciones se corresponden. Por favor, confirme si esto es así.`,
    DELETED_FOR_COMPLAINTS:
      'Varios usuarios reportaron la publicación y, por lo tanto, fue eliminada.',
    TEMPORAL_PUBLICATION: `@${username} vio una mascota que podría ser la tuya. Échale un vistazo!`
  };
  const title = posibleTitles[type];
  const description = posibleDescriptions[type];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.userImageContainer}>
        {userPhoto && (
          <Image style={styles.userImage} source={{ uri: userPhoto }} />
        )}
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
