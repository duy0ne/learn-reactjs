import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./AuthService";

const initialSate = {
  registerInfo: {},
  setting: {},
  userLogin: {}
}

export const register = createAsyncThunk('users/register',
  async (payload) => {
    const dataRegister = await registerUser(payload);

    localStorage.setItem('access_token', dataRegister.data.jwt);
    localStorage.setItem('registerInfo', JSON.stringify(dataRegister.data.user));

    return dataRegister.data.user;
  })

export const login = createAsyncThunk('user/login',
  async (payload) => {
    const dataLogin = await loginUser(payload);

    localStorage.setItem('access_token', dataLogin.data.jwt);
    localStorage.setItem('loginInfo', JSON.stringify(dataLogin.data.user));

    return dataLogin.data.user;
  })

const userSlice = createSlice({
  name: 'user',
  initialState: initialSate,
  reducers: {
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.registerInfo = action.payload
    },
    [login.fulfilled]: (state, action) => {
      state.userLogin = action.payload
    }
  },
})

export const { reducers } = userSlice;
export default userSlice.reducer;