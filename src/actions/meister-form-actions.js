import {loadDataAPI} from "../providers/meister-provider";


// Traffic Meister Form Actions
export const FETCH_MEISTER_DATA = 'FETCH_MEISTER_DATA';
export const MEISTER_DATA_LOADED = 'MEISTER_DATA_LOADED';


// Action Creators
export const loadTrafficMeisterData = () => dispatch => {
    dispatch({type: FETCH_MEISTER_DATA, loading: true});
    return loadDataAPI()
        .then(data => {
            dispatch({type: MEISTER_DATA_LOADED, data });
            dispatch({type: FETCH_MEISTER_DATA, loading: false});
        })
        .catch(err => {
            console.error(err);
            dispatch({type: FETCH_MEISTER_DATA, loading: false});
        });
};
