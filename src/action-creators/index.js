import {
    DELETE_ARTICLE,
    INCREMENT,
    SET_FILTER_FIELDS,
    ADD_COMMENT,
} from '../constants';


export function increment() {
    return {
        type: INCREMENT
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    };
}

export function setSelectFilterFields(selectedFields) {
    return {
        type: SET_FILTER_FIELDS,
        payload: selectedFields
    };
}

export function addComment(user, text, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            user,
            text,
            articleId,
        },
    };
}