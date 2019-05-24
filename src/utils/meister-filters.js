import {DEFAULT_SELECT_VALUE, DEFAULT_SELECTION_LIST} from "../constants/meister-consts";
import {List} from "immutable";


/**
 * Filters a list of objects based on a 'type' key removing duplicate keys, and any keys
 * that do not have a brand or color that matches optional filters passed in. This
 * returns the 'type' keys list alphabetically sorted.
 * @param data {Immutable.List<Object>}
 * @param selectionFilters {Object}
 * @returns {Immutable.List<String>}
 */
export const filterTypeList = (data, selectionFilters = DEFAULT_SELECTION_LIST) => {
    return data.reduce((accum, data) => {
        if (!data.hasOwnProperty('type') ||
            accum.includes(data.type) ||
            (selectionFilters.get('brand') !== DEFAULT_SELECT_VALUE && selectionFilters.get('brand') !== data.brand) ||
            (selectionFilters.get('color') !== DEFAULT_SELECT_VALUE && data.colors.indexOf(selectionFilters.get('color')) < 0)
        ) {
            return accum;
        }
        return accum.push(data.type);
    }, new List()).sort();
};


/**
 * Filters a list of objects based on a 'brand' key removing duplicate keys, and any keys
 * that do not have a type or color that matches optional filters passed in. This
 * returns the 'brand' keys list alphabetically sorted
 * @param data {Immutable.List<Object>}
 * @param selectionFilters {Object}
 * @returns {Immutable.List<String>}
 */
export const filterBrandList = (data, selectionFilters = DEFAULT_SELECTION_LIST) => {
    return data.reduce((accum, data) => {
        if (!data.hasOwnProperty('brand') ||
            accum.includes(data.brand) ||
            (selectionFilters.get('type') !== DEFAULT_SELECT_VALUE && selectionFilters.get('type') !== data.type) ||
            (selectionFilters.get('color') !== DEFAULT_SELECT_VALUE && data.colors.indexOf(selectionFilters.get('color')) < 0)
        ) {
            return accum;
        }
        return accum.push(data.brand);
    }, new List()).sort();
};


/**
 * Filters a list of objects based on the contents of a 'colors' key removing duplicate keys,
 * and any keys that do not have a type or color that matches optional filters passed in. This
 * returns a flattened list of the contents of the 'colors keys list alphabetically sorted.
 * @param data {Immutable.List<Object>}
 * @param selectionFilters {Object}
 * @returns {Immutable.List<String>}
 */
export const filterColorList = (data, selectionFilters = DEFAULT_SELECTION_LIST) => {
    const fullColorList =  data.reduce((accum, data) => {
        if (!data.hasOwnProperty('colors') ||
            (selectionFilters.get('type') !== DEFAULT_SELECT_VALUE && selectionFilters.get('type') !== data.type) ||
            (selectionFilters.get('brand') !== DEFAULT_SELECT_VALUE && selectionFilters.get('brand') !== data.brand)
        ) {
            return accum;
        }
        return accum.concat(data.colors); // De-dup list the immutable.js way
    }, new List()).sort();

    return fullColorList.toSet().toList();
};

/**
 * Returns the vehicle's data matching the supplied type and brand
 * @param data {Immutable.List<Object>}
 * @param type {string}
 * @param brand {string}
 * @returns {(Object|null)}
 */
export const filterByTypeAndBrand = (data, type, brand) => {
    const result = data.find(d => {
        return d.type === type && d.brand === brand;
    });
    return result ||  null;
};
