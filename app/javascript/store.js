import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducers from "./reducers";
import globalSagas from "./sagas";

export default function configureStore(initialState = {}, history) {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducers(),
    applyMiddleware(sagaMiddleware),
  );

  // Extensions
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  sagaMiddleware.run(globalSagas);

  return store;
};
