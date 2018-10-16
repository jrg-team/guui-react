import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import GuButton from '../lib/button';

configure({adapter: new Adapter()});

describe('Button', () => {
  it('children', () => {
    const component = shallow(<GuButton>Hi</GuButton>);
    expect(component.text()).toEqual('Hi');
  });
  it('disabled', () => {
    const fn = () => {
    }
    const component = shallow(<GuButton disabled={true} onClick={fn}>Hi</GuButton>);
    component.click()
    expect(fn).not.toHaveBeenCalled()
  })
});
