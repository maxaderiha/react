import {createStore, combineReducers} from 'redux';
import counterReducer from '../components/counter/reducer';
import articlesListReducer from '../components/articles-list/reducer';
import filterReducer from '../components/filter/reducer';

const reducer = combineReducers({
    count: counterReducer,
    articles: articlesListReducer,
    filter: filterReducer
});

const store = createStore(reducer);

//devOnly
window.store = store;

export default store;

