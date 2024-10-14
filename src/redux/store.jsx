import { legacy_createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export let store = legacy_createStore(
  productReducer,
  applyMiddleware(thunk, logger)
);