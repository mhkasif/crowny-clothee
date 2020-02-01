import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer} from 'redux-persist'
import shopReducer from './shop/shopReducer';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //persist only this
 };
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop:shopReducer
});
export default persistReducer(persistConfig,rootReducer);
