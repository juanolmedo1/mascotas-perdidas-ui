import { Image, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';

import DateUtils from '@core/utils/date';
import NavigationService from '@core/utils/navigation';
import styles from '@core/components/PublicationCandidateCard/styles';

const PublicationCandidateCard = ({
  date,
  id,
  imageShown,
  onSelect,
  profileImage,
  selected,
  username
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('Publication', { id })}
      activeOpacity={0.8}
    >
      <Image style={styles.image} source={{ uri: imageShown }} />
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfileImage}
          source={{
            uri: profileImage
          }}
        />
        <Text style={styles.username} numberOfLines={1}>
          {username}
        </Text>
        <Text style={styles.date}>{DateUtils.difference(date)}</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          disabled={false}
          value={selected}
          onValueChange={checkValue => onSelect(id, checkValue)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PublicationCandidateCard;
