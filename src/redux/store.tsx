// // import { configureStore } from "@reduxjs/toolkit";
// // import { favoriteReducer } from "./favorite/slice";

// // export const store = configureStore({
// //   reducer: {
// //     favoriteMovies: favoriteReducer,
// //   },
// // });
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { favoriteReducer, favoriteTVsReducer } from "./favorite/slice";
// // import { favoriteReducer } from "./favorite/slice";
// // import rootReducer from "./favorite/rootReducer";
// // import { favoriteReducer } from "./favorite/slice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   movies: favoriteReducer,
//   favoriteTVs: favoriteTVsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   // reducer: { favoriteMovies: persistedReducer },
//   reducer: persistedReducer,

// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });
// export const persistor = persistStore(store);
//////////////////////////////////////////////////////////
// store.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { favoriteMoviesReducer, favoriteTVsReducer } from "./favorite/slice";

// import favoriteMoviesReducer from "./reducers/favoriteMoviesSlice";
// import favoriteTVsReducer from "./reducers/favoriteTVsSlice";

const rootReducer = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
  favoriteTVs: favoriteTVsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteMovies", "favoriteTVs"], // states to be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
