import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import placesReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placesReducer
});

const persistConfig = {
  key: "root3",
  storage: AsyncStorage
};

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
