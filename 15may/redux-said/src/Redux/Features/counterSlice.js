import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fav: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.posts = action.payload;
    },
    // addFav: (state, action) => {
    //   state.fav.push(action.payload);
    // },
    // deleteFav: (state, action) => {
    //   state.fav = state.fav.filter((elem) => elem.id != action.payload);
    // },
    setFav: (state, action) => {
      let elemindex = state.fav.findIndex((el) => el.id == action.payload.id);
      if (elemindex == -1) {
        state.fav = [...state.fav, { ...action.payload }];
      } else {
        state.fav = state.fav.filter((el) => el.id != action.payload.id);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, addFav, deleteFav, setFav } = counterSlice.actions;

export default counterSlice.reducer;
