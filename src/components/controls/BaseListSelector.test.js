import React from 'react';
import {BaseListSelector} from './BaseListSelector';
import {List} from 'immutable';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('<BaseListSelector />', () => {

    const classesMock = {};
    let options;

    beforeEach(()=> {
        options = new List(['opt a', 'opt b', 'opt c']);
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <BaseListSelector classes={classesMock} />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should display the provided options', () => {
        const wrapper = shallow(
            <BaseListSelector label="Type"
                              options={options}
                              classes={classesMock}
                              onChange={() => true} />
        );

        expect(wrapper.find(`ListItem[key="item-${options[0]}"]`).exists());
        expect(wrapper.find(`ListItem[key="item-${options[1]}"]`).exists());
        expect(wrapper.find(`ListItem[key="item-${options[2]}"]`).exists());
    });

    it('should react to selection change', () => {
        const selectionMock = jest.fn();
        const wrapper = mount(
            <BaseListSelector label="Type"
                              options={options}
                              classes={classesMock}
                              onChange={selectionMock} />
        );

        wrapper.find('ListItem').at(1).simulate('click');
        expect(selectionMock.mock.calls.length).toBe(1);
        expect(selectionMock.mock.calls[0][0]).toBe('opt a');
    });

});
