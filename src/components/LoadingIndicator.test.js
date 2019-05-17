import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import renderer from 'react-test-renderer';

describe('<LoadingIndicator />', () => {

    it('should match the snapshot', () => {
        const component = renderer.create(
            <LoadingIndicator />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
