import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants';
import {arrToMap} from '../helpers';
import {Record, OrderedMap} from 'immutable';


const CommentRecord = Record({
    id: undefined,
    user: undefined,
    text: undefined,
});

const CommentsState = new Record({
    entities: new OrderedMap({}),
});

const defaultState = CommentsState();

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(payload.response, CommentRecord)));
        default:
            return commentsState;
    }
}