import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { hangmanReducer } from "./hangman-reducer";

const store = createStore(hangmanReducer, applyMiddleware(logger));
console.log(store.getState(() => {}));
export default store;
