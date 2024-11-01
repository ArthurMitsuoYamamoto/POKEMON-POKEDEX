import { editProfileParams } from '../interfaces/api.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const EditProfile = async (data: editProfileParams) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data));
    return 'success';
  } catch (error) {
    return error;
  }
};

export const GetProfile = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user !== null) {
      const userData = JSON.parse(user);
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};
