// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// type FavoriteState = {
//   favoriteMovie: number[];
//   // favoriteTVs: number[];
// };

// const initialState: FavoriteState = {
//   favoriteMovie: [],
//   // favoriteTVs: [],
// };
// // type FavoriteTVsState = number[];
// type FavoriteTVsState = {
//   favoriteTVs: number[];
// };

// const tvsInitialState: FavoriteTVsState = {
//   favoriteTVs: [],
// };
// // const tvsInitialState: FavoriteTVsState = [];

// const favoriteSlice = createSlice({
//   name: "favoriteMovie",
//   initialState,
//   reducers: {
//     favoriteMovie: (state, action: PayloadAction<number>) => {
//       console.log(state);
//       if (!state.favoriteMovie.includes(action.payload)) {
//         state.favoriteMovie.push(action.payload);
//         console.log(state);
//       } else {
//         state.favoriteMovie = state.favoriteMovie.filter(
//           (item) => item !== action.payload
//         );
//         console.log(state);
//       }
//     },
//   },
// });

// const tvsFavoriteSlice = createSlice({
//   name: "favoriteTVs",
//   initialState: tvsInitialState,
//   reducers: {
//     favoriteTVs: (state, action: PayloadAction<number>) => {
//       console.log(state);
//       if (!state.favoriteTVs.includes(action.payload)) {
//         state.favoriteTVs.push(action.payload);
//         console.log(state);
//       } else {
//         state.favoriteTVs = state.favoriteTVs.filter(
//           (item) => item !== action.payload
//         );
//         console.log(state);
//       }
//     },
//   },
// });

// export const favoriteReducer = favoriteSlice.reducer;
// export const { favoriteMovie } = favoriteSlice.actions;

// export const favoriteTVsReducer = tvsFavoriteSlice.reducer;
// export const { favoriteTVs } = tvsFavoriteSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteTVsState extends Array<number> {}

export const TVsInitialState: FavoriteTVsState = [];

// type FavoriteTVsState = {
//   favoriteTVs: number[];
// };

// const TVsInitialState: FavoriteTVsState = {
//   favoriteTVs: [],
// };

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
