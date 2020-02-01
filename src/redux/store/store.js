import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import {persistStore} from 'redux-persist'


 const middlewares=[logger];
 const store=createStore(rootReducer,applyMiddleware(...middlewares))
 const persistor=persistStore(store)
 export  {store,persistor}