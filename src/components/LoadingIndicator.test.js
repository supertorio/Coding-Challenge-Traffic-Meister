import React from 'react';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {

    it('should match the snapshot', () => {
        const wrapper = shallow(
            <LoadingIndicator />,
        );
        expect(wrapper).toMatchSnapshot();
    });

});
