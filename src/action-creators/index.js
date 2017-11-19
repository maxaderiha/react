import {
    DELETE_ARTICLE,
    INCREMENT,
    FILTER_ARTICLES,
    SET_FILTER_FIELDS
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