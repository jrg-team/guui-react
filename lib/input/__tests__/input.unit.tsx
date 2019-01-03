// import {mount} from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Input from '../input';
import {mount} from 'enzyme';

describe(Input.displayName, () => {
  it('DisplayName', () => {
    expect(Input.displayName).toEqual('Input');
  });
  it('prop label = hello', () => {
    const tree = renderer
      .create(<Input label="hello"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop labelPosition = top', () => {
    const tree = renderer
      .create(<Input label="hello" labelPosition="top"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop error = wrong', () => {
    const tree = renderer
      .create(<Input error="wrong"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop errorPosition = bottom', () => {
    const tree = renderer
      .create(<Input error="wrong" errorPosition="bottom"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop size = small', () => {
    const tree = renderer
      .create(<Input size="small"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop size = big', () => {
    const tree = renderer
      .create(<Input size="big"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop length = 10', () => {
    const tree = renderer
      .create(<Input length={10}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('prop value = 123', () => {
    const tree = renderer
      .create(<Input value="123"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should update value', () => {
    const c = mount(<Input value="234" onChange={() => {c.setProps({value: '233'});}}/>);
    expect(c.find('input').prop('value')).toEqual('234');
    c.find('input').simulate('change');
    expect(c.find('input').prop('value')).toEqual('233');
  });
  it('should response to enter', () => {
    const fn = jest.fn();
    const c = mount(<Input onEnter={fn}/>);
    c.find('input').simulate('keydown', {keyCode: 13});
    expect(fn.mock.calls.length).toEqual(1);
  });
  it('should response to keydown', () => {
    const fn = jest.fn();
    const c = mount(<Input onKeyDown={fn}/>);
    c.find('input').simulate('keydown', {keyCode: 42});
    expect(fn.mock.calls.length).toEqual(1);
  });
});
