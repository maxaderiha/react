import {normalizedArticles as defaultArticles} from '../../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../../constants';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articlesState = articlesMap, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_COMMENT:
            const updateArticle = Object.assign({}, articlesState[payload.articleId]);

            if (!updateArticle.comments) {
                updateArticle.comments = [];
            }

            updateArticle.comments.push(payload.commentId);

            const newArticle = {};
            newArticle[updateArticle.id] = updateArticle;

            return Object.assign({}, articlesState, newArticle);
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id);
        default:
            return articlesState;
    }
}