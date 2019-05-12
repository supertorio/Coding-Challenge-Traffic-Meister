import { Map } from 'immutable';

import {
    FETCH_MEISTER_DATA,
    MEISTER_DATA_LOADED,
} from '../actions/meister-form-actions';

export const defaultState = Map({
    loading: false,
    data: null,
    selections: null
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MEISTER_DATA:
            return state.set('loading', action.loading);

        case MEISTER_DATA_LOADED:
            return state.set('data', action.data);

        default:
            return state;
    }
}
