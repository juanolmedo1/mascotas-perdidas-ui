import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '@profile/components/ProfileHeader/styles';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import variables from '@styles/variables';

const ProfileHeader = ({ profile, favCount }) => {
  const { firstName, lastName, profilePicture, publications } = profile;
  const publicationsCount = (publications && publications.length) || 0;
  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: profilePicture.data
            }}
          />
          <Text style={styles.title}>
            {firstName} {lastName}
          </Text>
        </View>
        <View style={styles.countsContainer}>
          <View style={styles.countItem}>
            <Text style={styles.number}>{publicationsCount}</Text>
            <Text style={styles.subtitle}>Publicaciones</Text>
          </View>
          <View style={styles.itemDivider} />
          <View style={styles.countItem}>
            <Text style={styles.number}>{favCount}</Text>
            <Text style={styles.subtitle}>Favoritas</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.messageIcon} activeOpacity={0.8}>
          <IconFeather
            name="message-circle"
            size={30}
            color={variables.colors.backgroundBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingIcon} activeOpacity={0.8}>
          <IconAnt
            name="setting"
            size={30}
            color={variables.colors.backgroundDarkGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutIcon} activeOpacity={0.8}>
          <IconSimple
            name="logout"
            size={24}
            style={styles.logout}
            color={variables.colors.backgroundRed}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
