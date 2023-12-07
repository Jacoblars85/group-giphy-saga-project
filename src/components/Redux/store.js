import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();











// Create one store that all components can use
const store = createStore(
    combineReducers({
        basketReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

export default store;

