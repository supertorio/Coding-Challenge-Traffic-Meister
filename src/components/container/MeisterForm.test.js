import React from 'react';
import {MeisterForm} from './MeisterForm';

describe('<MeisterForm />', () => {

    const classesMock = {};
    let loading, ready;

    beforeEach(()=> {
        loading = false;
        ready = true;
    });

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <MeisterForm classes={classesMock}
                         loading={loading}
                         ready={ready}
                         loadTrafficMeisterData={()=>true}  />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should show the loading indicator while loading data', () => {
        loading = true;
        ready = false;

        const wrapper = shallow(
            <MeisterForm classes={classesMock}
                         loading={loading}
                         ready={ready}
                         loadTrafficMeisterData={()=>true}  />,
        );
        expect(wrapper.exists('LoadingIndicator'));
        expect(wrapper.exists('VehicleSelectorGroup')).toBe(false);
        expect(wrapper.exists('ResultsDisplay')).toBe(false);
    });

    it('should show the form when ready', () => {
        const wrapper = shallow(
            <MeisterForm classes={classesMock}
                         loading={loading}
                         ready={ready}
                         loadTrafficMeisterData={()=>true}  />,
        );
        expect(wrapper.exists('LoadingIndicator')).toBe(false);
        expect(wrapper.exists('VehicleSelectorGroup'));
        expect(wrapper.exists('ResultsDisplay'));
    });

    it('should trigger data load', () => {
        const loadDataMock = jest.fn();
        loading = true;
        ready = false;

        const wrapper = shallow(
            <MeisterForm classes={classesMock}
                         loading={loading}
                         ready={ready}
                         loadTrafficMeisterData={loadDataMock}  />,
        );
        expect(loadDataMock.mock.calls.length).toBe(1);
    });

});
