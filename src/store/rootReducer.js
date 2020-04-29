import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import galleryReducer from "./gallery/reducer";

const combinedReducers = combineReducers({
  user: userReducer,
  gallery: galleryReducer
});

export default combinedReducers;
