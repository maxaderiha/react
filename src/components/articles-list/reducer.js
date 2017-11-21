import {normalizedArticles as defaultArticles} from '../../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../../constants';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articlesState = articlesMap, action) => {
    const {type, payload, randomId} = action;

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
        default:
            return articlesState;
    }
}