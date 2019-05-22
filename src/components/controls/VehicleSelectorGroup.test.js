import React from 'react';
import VehicleSelectorGroup from './VehicleSelectorGroup';

describe('<VehicleSelectorGroup />', () => {

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <VehicleSelectorGroup />,
        );
        expect(wrapper).toMatchSnapshot();
    });

});
