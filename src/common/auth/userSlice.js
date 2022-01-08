import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JWT_USER_LOGIN, JWT_USER_REGISTER, LOGIN_INFO, REGISTER_INFO } from "../../utils/constants/Constants";
import { loginUser, registerUser } from "./AuthService";

const initialSate = {
  registerInfo: {},
  setting: {},
  userLogin: {}
}

export const register = createAsyncThunk('users/register',
  async (payload) => {
    const dataRegister = await registerUser(payload);

    localStorage.setItem(JWT_USER_REGISTER, dataRegister.data.jwt);
    localStorage.setItem(REGISTER_INFO, JSON.stringify(dataRegister.data.user));

    return dataRegister.data.user;
  })

export const login = createAsyncThunk('user/login',
  async (payload) => {
    const dataLogin = await loginUser(payload);

    localStorage.setItem(JWT_USER_LOGIN, dataLogin.data.jwt);
    localStorage.setItem(LOGIN_INFO, JSON.stringify(dataLogin.data.user));

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