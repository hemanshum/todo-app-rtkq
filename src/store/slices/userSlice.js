import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'form',
  initialState: {
    isSignedIn: false,
    userName: '',
  },
  reducers: {
    changeSigninStatus: (state, action) => {
      state.isSignedIn = action.payload;
    },
    changeName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { changeSigninStatus, changeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
