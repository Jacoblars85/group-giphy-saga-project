import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';


function* rootSaga() {
    yield takeLatest('SAGA/GET_BASKET', getFruit)
    yield takeLatest('SAGA/POST_BASKET', postFruits)
    yield takeLatest('SAGA/DELETE_BASKET', deleteFruit)
}





const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        basketReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

export default store;
