import React from 'react';
import {ResultsDisplay} from './ResultsDisplay';

describe('<ResultsDisplay />', () => {

    const classesMock = {};
    let selectedType, selectedBrand, selectedColor, formHasSelections;

    beforeEach(()=> {
        selectedType = 'car';
        selectedBrand = 'Bugatti Veyron';
        selectedColor = 'blue';
        formHasSelections = true;
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <ResultsDisplay classes={classesMock}
                            selectedType={selectedType}
                            selectedBrand={selectedBrand}
                            selectedColor={selectedColor}
                            formHasSelections={true} />,
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should display selected values', () => {
        const wrapper = mount(
            <ResultsDisplay classes={classesMock}
                            selectedType={selectedType}
                            selectedBrand={selectedBrand}
                            selectedColor={selectedColor}
                            formHasSelections={true} />,
        );

        expect(wrapper.find('Chip').at(0).prop('label')).toMatch(selectedType);
        expect(wrapper.find('Chip').at(1).prop('label')).toMatch(selectedBrand);
        expect(wrapper.find('Chip').at(2).prop('label')).toMatch(selectedColor);
    });

    it('should trigger form reset on button click', () => {
        const resetFormMock = jest.fn();

        const wrapper = mount(
            <ResultsDisplay classes={classesMock}
                            selectedType={selectedType}
                            selectedBrand={selectedBrand}
                            selectedColor={selectedColor}
                            formHasSelections={true}
                            resetVehicleForm={resetFormMock} />,
        );

        wrapper.find('Button').at(0).simulate('click');
        expect(resetFormMock.mock.calls.length).toBe(1);
    });

    it('should trigger clear selection on chip click', () => {
        const clearSelectionMock = jest.fn();

        const wrapper = mount(
            <ResultsDisplay classes={classesMock}
                            selectedType={selectedType}
                            selectedBrand={selectedBrand}
                            selectedColor={selectedColor}
                            formHasSelections={true}
                            clearSelection={clearSelectionMock} />,
        );

        wrapper.find('Chip').at(0).find('svg').at(0).simulate('click');
        expect(clearSelectionMock.mock.calls.length).toBe(1);
    });

});
