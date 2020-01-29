import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";



 const middlewares=[logger];
 const store=createStore(rootReducer,applyMiddleware(...middlewares))
 export default store