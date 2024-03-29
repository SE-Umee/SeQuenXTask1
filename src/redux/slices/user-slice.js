import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {name: '', email: '', password: ''},
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
