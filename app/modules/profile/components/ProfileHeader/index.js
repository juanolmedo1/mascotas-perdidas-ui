import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '@profile/components/ProfileHeader/styles';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import variables from '@styles/variables';

const ProfileHeader = ({ profile }) => {
  const { firstName, lastName, picture } = profile;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: picture
        }}
      />
      <Text style={styles.title}>
        {firstName} {lastName}
      </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.messageIcon}>
          <IconFeather
            name="message-circle"
            size={30}
            color={variables.colors.backgroundBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingIcon}>
          <IconAnt
            name="setting"
            size={30}
            color={variables.colors.backgroundDarkGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
