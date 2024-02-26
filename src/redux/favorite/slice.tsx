import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FavoriteState = {
  favoriteMovie: number[];
  // favoriteTVs: number[];
};

const initialState: FavoriteState = {
  favoriteMovie: [],
  // favoriteTVs: [],
};

// type FavoriteTVsState = {
//   favoriteTVs: number[];
// };

// const tvsInitialState: FavoriteTVsState = {
//   favoriteTVs: [],
// };

const favoriteSlice = createSlice({
  name: "favoriteMovie",
  initialState,
  reducers: {
    favoriteMovie: (state, action: PayloadAction<number>) => {
      console.log(state);
      if (!state.favoriteMovie.includes(action.payload)) {
        state.favoriteMovie.push(action.payload);
        console.log(state);
      } else {
        state.favoriteMovie = state.favoriteMovie.filter(
          (item) => item !== action.payload
        );
        console.log(state);
      }
    },
  },
});

// const tvsFavoriteSlice = createSlice({
//   name: "favoriteTVs",
//   initialState:
// ,
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

export const favoriteReducer = favoriteSlice.reducer;
export const { favoriteMovie } = favoriteSlice.actions;

// export const favoriteTVsReducer = tvsFavoriteSlice.reducer;
// export const { favoriteTVs } = tvsFavoriteSlice.actions;
