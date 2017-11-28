import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';

import {reducer} from '../reducer/index';


const enhancer = applyMiddleware(thunk, randomId, api, logger);

const store = createStore(reducer, {}, enhancer);

//devOnly
window.store = store;

export default store;

