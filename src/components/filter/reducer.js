import {SET_FILTER_FIELDS} from '../../constants';

export default (filterState = {selectTitles: [], selectDaysRange: {from: null, to: null}}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_FILTER_FIELDS:
            console.log(filterState);
            return Object.assign({}, filterState, payload);
        default:
            return filterState;
    }
}