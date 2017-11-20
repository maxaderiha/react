import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from '../middlewares/logger';

import counterReducer from '../components/counter/reducer';
import articlesListReducer from '../components/articles-list/reducer';
import filterReducer from '../components/filter/reducer';
import commentsReducer from '../components/comment/reducer';

const enhancer = applyMiddleware(logger);

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

