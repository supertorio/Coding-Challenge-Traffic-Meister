import {loadDataAPI} from "../providers/meister-provider";


// Traffic Meister Form Actions
export const FETCH_MEISTER_DATA = 'FETCH_MEISTER_DATA';
export const MEISTER_DATA_LOADED = 'MEISTER_DATA_LOADED';
export const CHANGE_VEHICLE_TYPE = 'CHANGE_VEHICLE_TYPE';
export const CHANGE_VEHICLE_BRAND = 'CHANGE_VEHICLE_BRAND';
export const CHANGE_VEHICLE_COLOR = 'CHANGE_VEHICLE_COLOR';
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
