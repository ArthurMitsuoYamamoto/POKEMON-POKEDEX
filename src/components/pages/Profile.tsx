import React, { useEffect } from 'react';
import ProfileTemplate from '../templates/ProfileTemplate';
import { GetProfile } from '../../api/profile';
import { useDispatch } from 'react-redux';
import { setAvatar, setDateOfBirth, setName } from '../../store/userSlice';

function Profile() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await GetProfile();
        dispatch(setAvatar(user.avatar));
        dispatch(setDateOfBirth(user.dateOfBirth));
        dispatch(setName(user.name));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, [dispatch]);

  return <ProfileTemplate isLoading={isLoading} />;
}

export default Profile;
