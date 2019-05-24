import { combineReducers } from 'redux-immutable';
import meister, * as meisterSelectors from './meister-reducer';

const rootReducer = combineReducers({
    meister
});

export default rootReducer;

export const getMeisterDataLoading = state => meisterSelectors.selectDataLoading(state.get('meister'));
export const getMeisterDataReady = state => meisterSelectors.selectDataReady(state.get('meister'));

export const getAvailableVehicleTypes = state => meisterSelectors.selectAvailableVehicleTypes(state.get('meister'));
export const getAvailableVehicleBrands = state => meisterSelectors.selectAvailableVehicleBrands(state.get('meister'));
export const getAvailableVehicleColors = state => meisterSelectors.selectAvailableVehicleColors(state.get('meister'));

export const getMeisterFormHasSelections = state => meisterSelectors.selectFormHasSelections(state.get('meister'));
export const getCurrentVehicleType = state => meisterSelectors.selectCurrentVehicleType(state.get('meister'));
export const getCurrentVehicleBrand = state => meisterSelectors.selectCurrentVehicleBrand(state.get('meister'));
export const getCurrentVehicleColor = state => meisterSelectors.selectCurrentVehicleColor(state.get('meister'));
export const getCurrentVehicleImage = state => meisterSelectors.selectCurrentVehicleImage(state.get('meister'));
