import {SET_FILTER_FIELDS} from '../../constants';

const defaultFilters = {
    selectTitles: [],
    selectDaysRange: {
        from: null,
        to: null
    }
};

export default (filterState = defaultFilters, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_FILTER_FIELDS:
            return Object.assign({}, filterState, payload);
        default:
            return filterState;
    }
}