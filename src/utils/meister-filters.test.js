import {filterTypeList, filterBrandList, filterColorList, filterByTypeAndBrand} from './meister-filters';
import {DEFAULT_SELECTION_LIST} from "../constants/meister-consts";
import {List} from "immutable";

const MOCK_DATA = new List([
    {
        id: 1,
        type: 'car',
        brand: 'Bugatti Veyron',
        colors: ['red', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
    },
    {
        id: 2,
        type: 'airplane',
        brand: 'Boeing 787 Dreamliner',
        colors: ['red', 'white', 'black', 'green'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
    },
    {
        id: 3,
        type: 'train',
        brand: 'USRA 0-6-6',
        colors: ['yellow', 'white', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/UP_4466_Neil916.JPG/600px-UP_4466_Neil916.JPG'
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

describe('filterByTypeAndBrand', () => {

    it('should return an vehicle data if a match is found', () => {
        const result = filterByTypeAndBrand(MOCK_DATA, 'car', 'Bugatti Veyron');
        expect(result).toEqual(MOCK_DATA.get(0));
    });

    it('should return an null if match is not found', () => {
        const result = filterByTypeAndBrand(MOCK_DATA, 'airplane', 'Bugatti Veyron');
        expect(result).toEqual(null);
    });

});
