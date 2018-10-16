import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import GuButton from '../lib/button';

configure({adapter: new Adapter()});

describe('Button', () => {
  it('children', () => {
    const component = mount(<GuButton>Hi</GuButton>);
    expect(component.text()).toEqual('Hi');
  });
  it('disabled', () => {
    const fn = jest.fn()
    const component = mount(<GuButton disabled={true} onClick={fn}>Hi</GuButton>)
    component.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(0)
  })
});
