import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

const moviesFavoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as number[],
  reducers: {
    favoriteMovies: (state, action) => {
      const newData: number = action.payload;
      if (!state.find((item) => item === newData)) {
        state.push(newData);
      }
    },
  },
});

export const favoriteReducer = moviesFavoriteSlice.reducer;
export const { favoriteMovies } = moviesFavoriteSlice.actions;
