import React from 'react';
import {VehicleColorSelector} from './VehicleColorSelector';
import {List} from 'immutable';

describe('<VehicleColorSelector />', () => {

    let colors, selectedColor;

    beforeEach(()=> {
        colors = new List(['red', 'green', 'blue']);
        selectedColor = colors.get[0];
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <VehicleColorSelector colors={colors} selectedColor={selectedColor} changeVehicleColorSelection={() => true} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

});
