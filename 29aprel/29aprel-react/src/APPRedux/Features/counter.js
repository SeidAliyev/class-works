import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    adding: (state, action) => {
      state.value.push(action.payload);
    },
    deleting: (state, action) => {
      const myindex = state.value.findIndex(item=>item.id === action.payload)
      if(myindex !== -1)
      state.splice(myindex,1)
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { adding, deleting } = counterSlice.actions;

export default counterSlice.reducer;
