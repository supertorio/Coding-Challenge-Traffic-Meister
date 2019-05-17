import {List, Map} from 'immutable';

import {DEFAULT_SELECT_VALUE, DEFAULT_SELECTION_LIST} from '../constants/meister-consts';
import {filterTypeList, filterBrandList, filterColorList} from '../utils/meister-filters';
import {
    CHANGE_VEHICLE_BRAND,
    CHANGE_VEHICLE_COLOR,
    CHANGE_VEHICLE_TYPE,
    FETCH_MEISTER_DATA,
    MEISTER_DATA_LOADED,
    CLEAR_TYPE_SELECTION,
    CLEAR_BRAND_SELECTION,
    CLEAR_COLOR_SELECTION,
    RESET_FORM,
} from '../actions/meister-form-actions';

/**
 * Default Reducer State
 * @type {Map<any, any>}
 */
export const defaultState = Map({
    loading: false,
    loadingErrors: null,
    ready: false,
    data: List(),
    selections: DEFAULT_SELECTION_LIST,
    filteredLists: Map({
        types: List(),
        brands: List(),
        colors: List(),
    })
});

// Meister Reducer Main
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MEISTER_DATA:
            return state.set('loading', action.loading).set('loadingErrors', action.errors || null);

        case MEISTER_DATA_LOADED:
            return state
                .set('data', action.data)
                .set('ready', true)
                .setIn(['filteredLists', 'types'], filterTypeList(action.data))
                .setIn(['filteredLists', 'brands'], filterBrandList(action.data))
                .setIn(['filteredLists', 'colors'], filterColorList(action.data));

        case CHANGE_VEHICLE_TYPE:
            return state
                .setIn(['selections', 'type'], action.vehicleType)
                .setIn(['filteredLists', 'brands'],
                    filterBrandList(state.get('data'), state.get('selections').set('type', action.vehicleType)))
                .setIn(['filteredLists', 'colors'],
                    filterColorList(state.get('data'), state.get('selections').set('type', action.vehicleType)));

        case CHANGE_VEHICLE_BRAND:
            return state
                .setIn(['selections', 'brand'], action.vehicleBrand)
                .setIn(['filteredLists', 'types'],
                    filterTypeList(state.get('data'), state.get('selections').set('brand', action.vehicleBrand)))
                .setIn(['filteredLists', 'colors'],
                    filterColorList(state.get('data'), state.get('selections').set('brand', action.vehicleBrand)));

        case CHANGE_VEHICLE_COLOR:
            return state
                .setIn(['selections', 'color'], action.vehicleColor)
                .setIn(['filteredLists', 'types'],
                    filterTypeList(state.get('data'), state.get('selections').set('color', action.vehicleColor)))
                .setIn(['filteredLists', 'brands'],
                    filterBrandList(state.get('data'), state.get('selections').set('color', action.vehicleColor)));

        case CLEAR_TYPE_SELECTION:
            return state.setIn(['selections', 'type'], DEFAULT_SELECT_VALUE)
                .setIn(['filteredLists', 'types'], filterTypeList(state.get('data'), state.get('selections').set('type', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'brands'], filterBrandList(state.get('data'), state.get('selections').set('type', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'colors'], filterColorList(state.get('data'), state.get('selections').set('type', DEFAULT_SELECT_VALUE)));

        case CLEAR_BRAND_SELECTION:
            return state.setIn(['selections', 'brand'], DEFAULT_SELECT_VALUE)
                .setIn(['filteredLists', 'types'], filterTypeList(state.get('data'), state.get('selections').set('brand', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'brands'], filterBrandList(state.get('data'), state.get('selections').set('brand', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'colors'], filterColorList(state.get('data'), state.get('selections').set('brand', DEFAULT_SELECT_VALUE)));

        case CLEAR_COLOR_SELECTION:
            return state.setIn(['selections', 'color'], DEFAULT_SELECT_VALUE)
                .setIn(['filteredLists', 'types'], filterTypeList(state.get('data'), state.get('selections').set('color', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'brands'], filterBrandList(state.get('data'), state.get('selections').set('color', DEFAULT_SELECT_VALUE)))
                .setIn(['filteredLists', 'colors'], filterColorList(state.get('data'), state.get('selections').set('color', DEFAULT_SELECT_VALUE)));

        case RESET_FORM:
            return state.set('selections', DEFAULT_SELECTION_LIST)
                .setIn(['filteredLists', 'types'], filterTypeList(state.get('data')))
                .setIn(['filteredLists', 'brands'], filterBrandList(state.get('data')))
                .setIn(['filteredLists', 'colors'], filterColorList(state.get('data')));

        default:
            return state;
    }
};


// State Selectors
export const selectDataLoading = state => state.get('loading');
export const selectDataReady = state => state.get('ready');
export const selectAvailableVehicleTypes = state => state.getIn(['filteredLists', 'types']);
export const selectAvailableVehicleBrands = state => state.getIn(['filteredLists', 'brands']);
export const selectAvailableVehicleColors = state => state.getIn(['filteredLists', 'colors']);
export const selectCurrentVehicleType = state => state.getIn(['selections', 'type']);
export const selectCurrentVehicleBrand = state => state.getIn(['selections', 'brand']);
export const selectCurrentVehicleColor = state => state.getIn(['selections', 'color']);
export const selectFormHasSelections = state => state.getIn(['selections', 'type']) !== DEFAULT_SELECT_VALUE ||
    state.getIn(['selections', 'brand']) !== DEFAULT_SELECT_VALUE ||
    state.getIn(['selections', 'color']) !== DEFAULT_SELECT_VALUE;
