import {normalizedArticles as defaultArticles} from '../../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../../constants';
import {arrToMap} from '../../helpers';

export default (articlesState = {}, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            const article = articlesState[payload.articleId];
            return {
                ...articlesState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId),
                },
            };

        case DELETE_ARTICLE:
            const tempArticlesState = Object.assign({}, articlesState);
            delete tempArticlesState[payload.id];
            return tempArticlesState;

        case LOAD_ALL_ARTICLES:
            return arrToMap(response);

        default:
            return articlesState;
    }
}