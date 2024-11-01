import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  avatar: string;
  dateOfBirth: string;
  name: string;
}

const initialState: UserState = {
  avatar:
    'https://i.pinimg.com/originals/4d/e0/0e/4de00e1068ef6671696e2aaa24b637b6.jpg',
  name: 'Axel Chávez',
  dateOfBirth: '22/04/2005',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDateOfBirth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
  },
});

export const { setAvatar, setDateOfBirth, setName } = userSlice.actions;
export default userSlice.reducer;
