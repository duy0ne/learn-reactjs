import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../pages/adminstrator/adminstratorSlice";
import userReducer from "../common/auth/userSlice"


const rootReducer = {
  adminR: adminReducer,
  userR: userReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store;