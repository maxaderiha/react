import {articles as defaultArticles} from '../../fixtures';
import {DELETE_ARTICLE, FILTER_ARTICLES, LAST_DATE} from '../../constants';

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id);
        case FILTER_ARTICLES:
            return defaultArticles.filter(article => {
                return filter(article, payload);
            });
        default:
            return articlesState;
    }
}

function filter(article, payload) {
    const {selectTitles, selectDaysRange: {from, to}} = payload;

    const resFilterByDate = from || to ? filterByDate(article.date, from, to) : true;
    const resFilterByTitle = selectTitles.length ? filterByTitle(article, selectTitles) : true;

    return resFilterByDate && resFilterByTitle;
}

function filterByTitle(article, selectTitles) {
    return selectTitles.some(selectTitle => selectTitle.label === article.title);
}

function filterByDate(date, from, to) {
    const articleDate = new Date(date).getTime();

    const startDate = new Date(0).getTime();
    const lastDate = new Date(LAST_DATE).getTime();

    const currFrom = from ? from.getTime() : startDate;
    const currTo = to ? to.getTime() : lastDate;

    return currFrom <= articleDate && articleDate <= currTo;
}
