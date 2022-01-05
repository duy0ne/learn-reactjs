import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0
// }

const adminSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increate: (state, action) => {
      if (action.payload.type === "increate") {
        return state + action.payload.value + 1;

      } else {
        return state + action.payload.value + 2;
      }
    },
    decreate: (state, action) => {
      return state + 1;
    }
  }
})

// const { actions, reducer } = adminSlice;
export const { increate, decreate } = adminSlice.actions; //named export
export default adminSlice.reducer; // default export