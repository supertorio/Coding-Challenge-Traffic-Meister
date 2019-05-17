import {Map} from "immutable";

export const DEFAULT_SELECT_VALUE = 'ANY';

export const SELECTION_CATEGORIES = {
    TYPE: 'type',
    BRAND: 'brand',
    COLOR: 'color',
};

export const DEFAULT_SELECTION_LIST = Map({
    type: DEFAULT_SELECT_VALUE,
    brand: DEFAULT_SELECT_VALUE,
    color: DEFAULT_SELECT_VALUE
});
