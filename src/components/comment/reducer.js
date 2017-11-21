import {normalizedComments as defaultComments} from '../../fixtures';
import {ADD_COMMENT} from '../../constants';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_COMMENT:
            return {
                ...commentsState,
                [randomId]: {...payload.comment, id: randomId},
            };

        default:
            return commentsState;
    }


}