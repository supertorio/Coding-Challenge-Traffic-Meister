import {loadDataAPI} from "../providers/meister-provider";
import {SELECTION_CATEGORIES} from '../constants/meister-consts';

// Traffic Meister Form Actions
export const FETCH_MEISTER_DATA = 'FETCH_MEISTER_DATA';
export const MEISTER_DATA_LOADED = 'MEISTER_DATA_LOADED';
export const CHANGE_VEHICLE_TYPE = 'CHANGE_VEHICLE_TYPE';
export const CHANGE_VEHICLE_BRAND = 'CHANGE_VEHICLE_BRAND';
export const CHANGE_VEHICLE_COLOR = 'CHANGE_VEHICLE_COLOR';
export const CLEAR_TYPE_SELECTION = 'CLEAR_TYPE_SELECTION';
export const CLEAR_BRAND_SELECTION = 'CLEAR_BRAND_SELECTION';
export const CLEAR_COLOR_SELECTION = 'CLEAR_COLOR_SELECTION';
export const RESET_FORM = 'RESET_FORM';


// Action Creators
export const loadTrafficMeisterData = () => dispatch => {
    dispatch({type: FETCH_MEISTER_DATA, loading: true});
    return loadDataAPI()
        .then(data => {
            dispatch({type: MEISTER_DATA_LOADED, data });
            dispatch({type: FETCH_MEISTER_DATA, loading: false});
        })
        .catch(err => {
            dispatch({type: FETCH_MEISTER_DATA, loading: false, errors: err});
        });
};
export const changeVehicleTypeSelection = (vehicleType) => ({ type: CHANGE_VEHICLE_TYPE, vehicleType });
export const changeVehicleBrandSelection = (vehicleBrand) => ({ type: CHANGE_VEHICLE_BRAND, vehicleBrand });
export const changeVehicleColorSelection = (vehicleColor) => ({ type: CHANGE_VEHICLE_COLOR, vehicleColor });
export const resetVehicleForm = () => ({ type: RESET_FORM });

export const clearSelection = (category) => dispatch => {
    if (category === SELECTION_CATEGORIES.TYPE) {
        dispatch({type: CLEAR_TYPE_SELECTION});
    }
    else if (category === SELECTION_CATEGORIES.BRAND) {
        dispatch({type: CLEAR_BRAND_SELECTION});
    }
    else if (category === SELECTION_CATEGORIES.COLOR) {
        dispatch({type: CLEAR_COLOR_SELECTION});
    }
};
