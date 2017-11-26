import {normalizedArticles as defaultArticles} from '../../fixtures';
import {
    DELETE_ARTICLE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    SUCCESS,
    START,
    LOAD_ARTICLE,
} from '../../constants';
import {arrToMap} from '../../helpers';
import {OrderedMap, Map, Record} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    date: undefined,
    id: undefined,
    comments: [],
    loading: false,
});

const ReducerState = new Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({}),
});

const defaultArticlesState = ReducerState();

export default (articlesState = defaultArticlesState, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            return articlesState.updateIn(
                ['entities', payload.articleId, 'comments'],
                comments => comments.concat(randomId));

        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id]);

        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);

        case LOAD_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ARTICLE + SUCCESS:
            return articlesState.setIn(['entities', payload.id], new ArticleRecord(payload.response));

        default:
            return articlesState;
    }
}