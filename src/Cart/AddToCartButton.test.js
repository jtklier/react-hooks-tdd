import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddToCartButton from './AddToCartButton';
import context from './testHelpers';

configure({ adapter: new Adapter() });

jest.mock('./Provider');
test('function called on click', () => {
    const component = mount(<AddToCartButton />);
    component.find('button').simulate('click');
    expect(context.onAddToCartClick.mock.calls.length).toBe(1);
});