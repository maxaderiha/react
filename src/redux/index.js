import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';

import counterReducer from '../components/counter/reducer';
import articlesListReducer from '../components/articles-list/reducer';
import filterReducer from '../components/filter/reducer';
import commentsReducer from '../components/comment/reducer';

const enhancer = applyMiddleware(thunk, randomId, api, logger);

const reducer = combineReducers({
    count: counterReducer,
    articles: articlesListReducer,
    filter: filterReducer,
    comments: commentsReducer,
});

const store = createStore(reducer, {}, enhancer);

//devOnly
window.store = store;

export default store;

