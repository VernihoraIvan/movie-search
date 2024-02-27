import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteTVsState extends Array<number> {}

export const TVsInitialState: FavoriteTVsState = [];

const favoriteTVsSlice = createSlice({
  name: "favoriteTVs",
  initialState: TVsInitialState,
  reducers: {
    toggleFavoriteTVs: (state, action: PayloadAction<number>) => {
      const existingIndex = state.findIndex((id) => id === action.payload);
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

interface FavoriteMoviesState extends Array<number> {}

export const MoviesInitialState: FavoriteMoviesState = [];

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovie",
  initialState: MoviesInitialState,
  reducers: {
    toggleFavoriteMovies: (state, action: PayloadAction<number>) => {
      const existingIndex = state.findIndex((id) => id === action.payload);
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavoriteMovies } = favoriteMoviesSlice.actions;
export const favoriteMoviesReducer = favoriteMoviesSlice.reducer;

export const { toggleFavoriteTVs } = favoriteTVsSlice.actions;
export const favoriteTVsReducer = favoriteTVsSlice.reducer;
