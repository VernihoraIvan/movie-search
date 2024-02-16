import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

const moviesFavoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as number[],
  reducers: {
    favoriteMovies: (state, action) => {
      if (!state.find((item) => item === action.payload)) {
        state.push(action.payload);
        console.log("if");
      } else {
        state.splice(state.indexOf(action.payload), 1);
        console.log("else");
      }
    },
  },
});

export const favoriteReducer = moviesFavoriteSlice.reducer;
export const { favoriteMovies } = moviesFavoriteSlice.actions;
