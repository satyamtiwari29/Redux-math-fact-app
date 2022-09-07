import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga.js";

const SagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(mySaga);

export default store;
