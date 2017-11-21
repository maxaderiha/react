import {createSelector} from 'reselect';

const filtersGetter = state => state.filter;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtrateArticlesSelector = createSelector(filtersGetter, articlesGetter, (filter, articles) => {
    const {selectTitles, selectDaysRange: {from, to}} = filter;
    const articlesIds = Object.keys(articles);


    return articlesIds.filter(articleId => {
        const article = articles[articleId];
        const articleDate = Date.parse(article.date);
        return (!selectTitles.length || selectTitles.includes(article.id)) &&
            (!from || !to || (articleDate > from && articleDate < to));
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});

export const articlesSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles[id];
});