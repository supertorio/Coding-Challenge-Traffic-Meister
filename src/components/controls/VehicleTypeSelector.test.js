import React from 'react';
import {VehicleTypeSelector} from './VehicleTypeSelector';
import {List} from 'immutable';

describe('<VehicleTypeSelector />', () => {

    let types, selectedType;

    beforeEach(()=> {
        types = new List(['car', 'train', 'airplane']);
        selectedType = types.get[0];
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <VehicleTypeSelector vehicles={types} selectedType={selectedType} changeVehicleTypeSelection={() => true} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

});
