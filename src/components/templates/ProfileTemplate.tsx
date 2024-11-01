import React from 'react';
import { Image, Text, View, useColorScheme } from 'react-native';
import CircularProgress from '../atoms/CircularProgress';
import {
  ProfileTemplateProps,
  ProfileTemplateStyles,
} from '../../interfaces/templates.interface';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { Profile } from '../../interfaces/profile.interface';
import IconButton from '../molecules/IconButton';
import EditIcon from '../../assets/icons/edit.svg';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../../types/navigation.type';

function ProfileTemplate({ isLoading }: ProfileTemplateProps) {
  const user = useSelector((state: Profile) => state.user);
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<ScreenNavigationProp>();

  const styles: ProfileTemplateStyles = {
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
    },
    profileImage: {
      width: 250,
      height: 250,
    },
    h1: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      width: '100%',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    h2: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    button: {
      marginTop: 12,
      paddingHorizontal: 16,
    },
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.avatar,
        }}
        style={styles.profileImage}
      />
      <Text style={styles.h1}>{user.name}</Text>
      <Text style={styles.h2}>{user.dateOfBirth}</Text>
      <IconButton
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.button}
        title="Edit"
        Image={EditIcon}
      />
    </View>
  );
}

export default ProfileTemplate;
