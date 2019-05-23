import {filterTypeList, filterBrandList, filterColorList} from './meister-filters';
import {DEFAULT_SELECTION_LIST} from "../constants/meister-consts";
import {List} from "immutable";

const MOCK_DATA = new List([
    {
        id: 1,
        type: 'car',
        brand: 'Bugatti Veyron',
        colors: ['red', 'black']
    },
    {
        id: 2,
        type: 'airplane',
        brand: 'Boeing 787 Dreamliner',
        colors: ['red', 'white', 'black', 'green']
    },
    {
        id: 3,
        type: 'train',
        brand: 'USRA 0-6-6',
        colors: ['yellow', 'white', 'black']
    }
]);

describe('Type List Filter', () => {
    it('should return the full list of types if no filters are applied', () => {
        const expected = new List(['airplane', 'car', 'train']);
        const actual = filterTypeList(MOCK_DATA, DEFAULT_SELECTION_LIST);
        expect(actual).toEqual(expected);
    });

    it('should return the full list of types if only a type filter is applied', () => {
        const expected = new List(['airplane', 'car', 'train']);
        const actual = filterTypeList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('type', 'train'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a brand filter', () => {
        const expected = new List(['airplane']);
        const actual = filterTypeList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('brand', 'Boeing 787 Dreamliner'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a color filter', () => {
        const expected = new List(['airplane', 'car']);
        const actual = filterTypeList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('color', 'red'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a brand and color filter', () => {
        const expected = new List(['airplane']);
        const actual = filterTypeList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('brand', 'Boeing 787 Dreamliner').set('color', 'red'));
        expect(actual).toEqual(expected);
    });
});

describe('Brand List Filter', () => {
    it('should return the full list of types if no filters are applied', () => {
        const expected = new List(['Boeing 787 Dreamliner', 'Bugatti Veyron', 'USRA 0-6-6']);
        const actual = filterBrandList(MOCK_DATA, DEFAULT_SELECTION_LIST);
        expect(actual).toEqual(expected);
    });

    it('should return the full list of types if only a brand filter is applied', () => {
        const expected = new List(['Boeing 787 Dreamliner', 'Bugatti Veyron', 'USRA 0-6-6']);
        const actual = filterBrandList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('brand', 'USRA 0-6-6'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a brand filter', () => {
        const expected = new List(['Bugatti Veyron']);
        const actual = filterBrandList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('type', 'car'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a color filter', () => {
        const expected = new List(['Boeing 787 Dreamliner', 'Bugatti Veyron']);
        const actual = filterBrandList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('color', 'red'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a type and color filter', () => {
        const expected = new List(['Bugatti Veyron']);
        const actual = filterBrandList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('type', 'car').set('color', 'red'));
        expect(actual).toEqual(expected);
    });
});

describe('Color List Filter', () => {
    it('should return the full list of types if no filters are applied', () => {
        const expected = new List(['black', 'green', 'red', 'white', 'yellow']);
        const actual = filterColorList(MOCK_DATA, DEFAULT_SELECTION_LIST);
        expect(actual).toEqual(expected);
    });

    it('should return the full list of types if only a color filter is applied', () => {
        const expected = new List(['black', 'green', 'red', 'white', 'yellow']);
        const actual = filterColorList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('color', 'black'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a type filter', () => {
        const expected = new List(['black', 'green', 'red', 'white']);
        const actual = filterColorList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('type', 'airplane'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a brand filter', () => {
        const expected = new List(['black', 'red']);
        const actual = filterColorList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('brand', 'Bugatti Veyron'));
        expect(actual).toEqual(expected);
    });

    it('should return only items that match a type and brand filter', () => {
        const expected = new List(['black', 'red']);
        const actual = filterColorList(MOCK_DATA, DEFAULT_SELECTION_LIST.set('type', 'car').set('brand', 'Bugatti Veyron'));
        expect(actual).toEqual(expected);
    });
});
