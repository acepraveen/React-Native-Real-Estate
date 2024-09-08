import {createSlice} from '@reduxjs/toolkit';
import {dispatch} from '..';

const initialState: {userData: any} = {
  userData: {name: 'Praveen Verma'},
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export default user.reducer;

export const handleUserData = (data: any) => {
  dispatch(user.actions.getUserData(data));
};
