import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesListReducer from './articles';
import filterReducer from './filter';
import commentsReducer from './comments';


export const reducer = combineReducers({
    count: counterReducer,
    articles: articlesListReducer,
    filter: filterReducer,
    comments: commentsReducer,
});