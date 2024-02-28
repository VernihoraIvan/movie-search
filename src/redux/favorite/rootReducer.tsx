import { combineReducers } from "@reduxjs/toolkit";
import { favoriteMoviesReducer, favoriteTVsReducer } from "./slice";

const rootReducer = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
  favoriteTVs: favoriteTVsReducer,
});

export default rootReducer;
