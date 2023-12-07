import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('SAGA/GET_GIFFY', getGiffy)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const giffyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFFY':
            return action.payload;
        default:
            return state;
    }
}

function* getGiffy(action) {
    try {
       
        const response = yield axios({
            method: 'GET',
            url: `/api/giphy/${action.payload}`
        })

        yield put({
            type: 'SET_GIFFY',
            payload: response.data
        })
    } catch (error) {
        console.log('Unable to get giffy from server', error);
    }
}










// Create one store that all components can use
const store = createStore(
    combineReducers({
        giffyReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

export default store;

