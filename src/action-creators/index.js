import {
    DELETE_ARTICLE,
    INCREMENT,
    SET_FILTER_FIELDS,
    ADD_COMMENT,
    LOAD_ARTICLE_COMMENTS,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    SUCCESS,
    FAIL,
} from '../constants';


export function increment() {
    return {
        type: INCREMENT,
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id},
    };
}

export function setSelectFilterFields(selectedFields) {
    return {
        type: SET_FILTER_FIELDS,
        payload: selectedFields,
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

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id},
        });

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response},
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {id, error},
                }));
        }, 1000);
    };
}

export function loadArticleComments(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE_COMMENTS + START,
            payload: {articleId},
        });

        setTimeout(() => {
            fetch(`/api/comment?article=${articleId}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE_COMMENTS + SUCCESS,
                    payload: {articleId, response},
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE_COMMENTS + FAIL,
                    payload: {articleId, error},
                }));
        }, 1000);
    }
}