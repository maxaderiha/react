import {createStore, combineReducers} from 'redux';
import counterReducer from '../components/counter/reducer';
import articlesListReducer from '../components/articles-list/reducer';
import filterReducer from '../components/filter/reducer';
import commentsReducer from '../components/comment/reducer';

const reducer = combineReducers({
    count: counterReducer,
    articles: articlesListReducer,
    filter: filterReducer,
    comments: commentsReducer,
});

const store = createStore(reducer);

//devOnly
window.store = store;

export default store;

