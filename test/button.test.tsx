import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import GuButton from '../lib/button';

configure({adapter: new Adapter()});

xdescribe('Button', () => {
  it('将 children 显示为内容', () => {
    const component = shallow(<GuButton>Hi</GuButton>);
    expect(component.text()).toEqual('Hi');
  });
  it('接受 disabled', () => {
    const fn = jest.fn()
    const component = mount(<GuButton disabled={true} onClick={fn}>Hi</GuButton>)
    component.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(0)
  })
  it('接受 icon', () => {
    const component = shallow(<GuButton icon="alipay">Hi</GuButton>)
    expect(component.find('svg.gu-icon-alipay').exists()).toEqual(true)
  })
  it('接受 iconPosition', () => {
    const component = shallow(<GuButton icon="alipay" iconPosition="right">Hi</GuButton>)
    expect(component.find('svg.gu-icon-alipay').exists()).toEqual(true)
  })
  it('接受 loading', () => {
    const component = shallow(<GuButton icon="alipay" loading={true}>Hi</GuButton>)
    expect(component.find('svg.gu-icon-alipay').exists()).toEqual(false)
    expect(component.find('svg.gu-icon-loading').exists()).toEqual(true)
  })
  it('接受 size', () => {
    expect(() => {
      shallow(<GuButton size="small">Hi</GuButton>)
      shallow(<GuButton size="default">Hi</GuButton>)
      shallow(<GuButton size="large">Hi</GuButton>)
      shallow(<GuButton>Hi</GuButton>)
    }).not.toThrow()
  })
  it('接受 href 和 target', () => {
    const c = shallow(<GuButton href="http://jirengu.com" target="_blank">Hi</GuButton>)
    expect(c.find('a[href="http://jirengu.com"][target="_blank"]').exists()).toEqual(true)
  })
  it('接受 type', () => {
    const c = shallow(<GuButton type="submit">Hi</GuButton>)
    expect(c.find('button[type="submit"]').exists()).toEqual(true)
  })
  it('接受 color 和 ghost', () => {
    expect(() => {
      shallow(<GuButton color="red">Hi</GuButton>)
      shallow(<GuButton color="blue">Hi</GuButton>)
      shallow(<GuButton color="green">Hi</GuButton>)
      shallow(<GuButton color="white">Hi</GuButton>)
      shallow(<GuButton>Hi</GuButton>)
    }).not.toThrow()
  })
  it('接受 onClick', () => {
    const fn = (e: any) => {
      expect(e).toHaveProperty('target')
    }
    const component = mount(<GuButton onClick={fn}>Hi</GuButton>)
    component.find('button').simulate('click')
  })
});
