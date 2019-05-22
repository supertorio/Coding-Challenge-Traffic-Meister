import React from 'react';
import {VehicleBrandSelector} from './VehicleBrandSelector';
import {List} from 'immutable';

describe('<VehicleBrandSelector />', () => {

    let brands, selectedBrand;

    beforeEach(()=> {
        brands = new List(['Bugatti Veyron', 'Boeing 787 Dreamliner', 'Lamborghini Huracán']);
        selectedBrand = brands.get[0];
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <VehicleBrandSelector brands={brands} selectedBrand={selectedBrand} changeVehicleBrandSelection={()=> true} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

});
