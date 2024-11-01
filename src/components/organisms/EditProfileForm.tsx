import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, Text, TextInput, View, useColorScheme } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Button from '../atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../molecules/IconButton';
import EditIcon from '../../assets/icons/edit.svg';
import CakeIcon from '../../assets/icons/cake.svg';
import { EditProfileFormStyle } from '../../interfaces/molecules.interface';
import { Profile } from '../../interfaces/profile.interface';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup';
import { EditProfile } from '../../api/profile';
import { setAvatar, setDateOfBirth, setName } from '../../store/userSlice';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const EditProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
});

function EditProfileForm() {
  const isDarkMode = useColorScheme() === 'dark';
  const user = useSelector((state: Profile) => state.user);
  const [avatar, setAvatarState] = useState<string>(user.avatar);
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const styles: EditProfileFormStyle = {
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 12,
      padding: 20,
    },
    form: {
      gap: 12,
    },
    imagecontainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      gap: 4,
    },
    image: {
      width: 200,
      height: 200,
    },
    textinput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      color: isDarkMode ? '#fff' : '#000',
    },
    datepicker: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
    },
    text: { fontSize: 16, width: '100%' },
    errortext: { fontSize: 12, color: 'red', marginTop: -4 },
    buttoncontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    button: {
      paddingHorizontal: 16,
    },
  };

  return (
    <Formik
      initialValues={{
        name: user.name,
      }}
      validationSchema={EditProfileSchema}
      onSubmit={async values => {
        const result = await EditProfile({
          avatar,
          dateOfBirth: date.toLocaleDateString(),
          name: values.name,
        });

        if (result === 'success') {
          dispatch(setAvatar(avatar));
          dispatch(setDateOfBirth(date.toLocaleDateString()));
          dispatch(setName(values.name));
        }
      }}>
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.imagecontainer}>
              <Image source={{ uri: avatar }} style={styles.image} />
              <IconButton
                onPress={async () => {
                  const result = await launchImageLibrary({
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 350,
                    maxWidth: 350,
                    selectionLimit: 1,
                  });
                  if (result.assets && result.assets[0].uri) {
                    setAvatarState(result.assets[0].uri);
                  }
                }}
                Image={EditIcon}
              />
            </View>
            <Text style={styles.text}>Full name</Text>
            <TextInput
              placeholder="Full name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.textinput}
            />
            {errors.name && touched.name && (
              <Text style={styles.errortext}>{errors.name}</Text>
            )}
            <View style={styles.datepicker}>
              <Text style={styles.text}>Date of Birth</Text>
              <IconButton
                onPress={() => {
                  setOpen(true);
                }}
                title={date.toLocaleDateString()}
                Image={CakeIcon}
              />

              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(datePick: Date) => {
                  setOpen(false);
                  setDate(datePick);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                mode="date"
                title={null}
                theme="auto"
              />
            </View>
          </View>

          <View style={styles.buttoncontainer}>
            <Button
              onPress={() => {
                if (isValid || !isSubmitting) {
                  handleSubmit();
                  navigation.goBack();
                }
              }}
              title="Save"
              style={styles.button}
              backgroundColor={isValid || isSubmitting ? '#2196F3' : '#c0c0c0'}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

export default EditProfileForm;
