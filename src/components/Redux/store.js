import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('SAGA/GET_GIFFY', getGiffy)
    yield takeLatest('SAGA/ADD_FAVORITE', postNewFav)
    yield takeLatest('SAGA/SET_FAVORITES', getFavorites)
    yield takeLatest('SAGA/UPDATE_FAVORITES', setFavCategory)
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

const setFavorites = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVS':
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

function* postNewFav(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/favorites',
            data: {
                newFavorite: action.payload,
                
            }
        })
    } catch (error) {
        console.log('Unable to post giphy to server:', error)
    }
}

//generator function to handle setting a favorites category
function* setFavCategory(action) {
    try {
       
        const response = yield axios({
            method: 'PUT',
            url: `/api/favorites/${action.payload.gifID}`,
            data: {category_id: action.payload.gifNAME}
        })

        yield put({
            type: 'SAGA/SET_FAVORITES',

        })
    } catch (error) {
        console.log('Unable to update giffy fav category from server', error);
    }
}

function* getFavorites() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/favorites'
        })
        yield put({
            type: 'SET_FAVS',
            payload: response.data
        })
    } catch (error) {
        console.log('Unable to get our favorite giphs:', error)
    }
}








// Create one store that all components can use
const store = createStore(
    combineReducers({
        giffyReducer,
        setFavorites
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

export default store;

