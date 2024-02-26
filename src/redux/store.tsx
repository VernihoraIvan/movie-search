// import { configureStore } from "@reduxjs/toolkit";
// import { favoriteReducer } from "./favorite/slice";

// export const store = configureStore({
//   reducer: {
//     favoriteMovies: favoriteReducer,
//   },
// });
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { favoriteReducer, favoriteTVsReducer } from "./favorite/slice";
import { favoriteReducer } from "./favorite/slice";
// import rootReducer from "./favorite/rootReducer";
// import { favoriteMoviesReducer, favoriteTVsReducer } from "./favorite/slice";

const persistConfig = {
  key: "root",
  storage,
};

// const rootReducer = combineReducers({
//   favoriteMovies: favoriteReducer,
//   // favoriteTVs: favoriteTVsReducer,
// });

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  // reducer: { favoriteMovies: persistedReducer },
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
