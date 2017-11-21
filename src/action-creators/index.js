import {
    DELETE_ARTICLE,
    INCREMENT,
    SET_FILTER_FIELDS,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
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
            comment: {
                user,
                text,
            },
            articleId,
        },
        generateCommentId: true,
    };
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article',
    };
}