import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FavoriteState = {
  favoriteMovies: number[];
};

const initialState: FavoriteState = {
  favoriteMovies: [],
};

const moviesFavoriteSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    favoriteMovies: (state, action: PayloadAction<number>) => {
      console.log(state);
      if (!state.favoriteMovies.includes(action.payload)) {
        state.favoriteMovies.push(action.payload);
        console.log(state);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter(
          (item) => item !== action.payload
        );
        console.log(state);
      }
    },
  },
});

export const favoriteReducer = moviesFavoriteSlice.reducer;
export const { favoriteMovies } = moviesFavoriteSlice.actions;
