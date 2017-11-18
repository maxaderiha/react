import {createStore, combineReducers} from 'redux';
import counterReducer from '../components/counter/reducer';
import articlesListReducer from '../components/articles-list/reducer';

const reducer = combineReducers({
    count: counterReducer,
    articles: articlesListReducer
});

const store = createStore(reducer);

//devOnly
window.store = store;

export default store;

