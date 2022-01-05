import { createSlice } from "@reduxjs/toolkit";

const initialSate = {

}

const userSlice = createSlice({
  name: 'user',
  initialState: initialSate,
  reducers: {
    get: (state, action) => {
      return state;
    }
  }
})

export const { get } = userSlice.actions;
export default userSlice.reducer;