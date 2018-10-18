import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import GuInput from '../lib/input'

configure({adapter: new Adapter()});

describe('Input', () => {
  let c: ReactWrapper
  beforeEach(() => {
    c = mount(
      <GuInput value="hi" size="small" placeholder="请输入文字"/>
    );
  })

  it('接受 value', () => {
    expect(c.find('.gu-input').props().value).toEqual('hi')
  })

  xit('接受 size', () => {
    expect(c.find('.gu-input-small').exists()).toEqual(true)
  })

  it('接受 placeholder', () => {
    expect(c.find('.gu-input').props().placeholder).toEqual('请输入文字')
  })

  it('默认 disabled 为 false', () => {
    expect(c.find('.gu-input').props().disabled).toEqual(false)
  })

  it('接受 disabled', () => {
    c = mount(
      <GuInput value="hi" size="small" disabled={true} placeholder="请输入文字"/>
    );
    expect(c.find('.gu-input').props().disabled).toEqual(true)
  })

  it('接受 type', () => {
    c = mount(
      <GuInput type="textarea" value="hi"/>
    );
    console.log(c.html())
    expect(c.find('.gu-input').props().type).toEqual('textarea')
  })

  it('回车可以触发 onPressEnter 事件', () => {
    const fn = jest.fn();

    c = mount(
      <GuInput value="hi" size="small" onPressEnter={fn}/>
    );
    c.find('.gu-input').simulate('keyDown', {keyCode: 13})
    expect(fn.mock.calls.length).toBe(1);
  })

  it('按键可以触发 onKeyUp 事件', () => {
    const fn = jest.fn();

    c = mount(
      <GuInput value="hi" size="small" onChange={fn}/>
    );
    c.find('.gu-input').simulate('keyUp', {keyCode: 40})
    expect(fn.mock.calls.length).toBe(1);
  })
})
