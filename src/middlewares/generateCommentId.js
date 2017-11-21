import {ADD_COMMENT} from '../constants';

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        action.payload.commentId = Date.now().toString();
    }
    next(action);
};