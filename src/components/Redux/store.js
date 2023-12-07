import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('SAGA/GET_BASKET', getFruit)
    yield takeLatest('SAGA/POST_BASKET', postFruits)
    yield takeLatest('SAGA/DELETE_BASKET', deleteFruit)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an 
// action is dipatched. state = ['Apple'] sets the default 
// value of the array.
const basketReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BASKET':
            return action.payload;
        default:
            return state;
    }
}

function* getGiffy() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/fruit'
        })
        yield put({
            type: 'SET_BASKET',
            payload: response.data
        })
    } catch (error) {
        console.log('Unable to get basket from server', error);
    }
}

function* postFruits(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/fruit',
            data: {
                fruit: action.payload
            }
        })
        yield put({
            type: 'SAGA/GET_BASKET',
        })
    } catch (error) {
        console.log('Unable to saving fruit from server', error);
    }
}

function* deleteFruit(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/fruit/${action.payload}`

        })
        yield put({
            type: 'SAGA/GET_BASKET',
        })
    } catch (error) {
        console.log('Unable to deleting fruit from server', error);
    }
}




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

