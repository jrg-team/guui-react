import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import GuInput from '../../lib/input'

configure({adapter: new Adapter()});

describe('Input', () => {

  describe('属性', () => {

    it('接受 value、size、placeholder', () => {
      const c: ReactWrapper = mount(
      <GuInput value="hi" size="small" placeholder="请输入文字"/>
      );
      expect(c.find('.gu-input').props().value).toEqual('hi');
      expect(c.find('.gu-input-small').exists()).toEqual(true);
      expect(c.find('.gu-input').props().placeholder).toEqual('请输入文字');
    })

    it('支持 disabled', () => {
      const c1: ReactWrapper = mount(
        <GuInput/>
      );
      expect(c1.find('.gu-input').props().disabled).toEqual(false);
      const c2: ReactWrapper = mount(
        <GuInput disabled={true}/>
      );
      expect(c2.find('.gu-input').props().disabled).toEqual(true);
    });

    it('接受 type', () => {
      const c = mount(
        <GuInput type="text" value="hi"/>
      );
      expect(c.find('.gu-input').props().type).toEqual('text');
    });

    it('接受 error、errorPosition', () => {
      const c = mount(
        <GuInput error="你错了" errorPosition="left"/>
      );
      expect(c.find('.gu-input-error').exists()).toEqual(true);
      expect(c.find('.gu-input-error').text()).toEqual('你错了');
      expect(c.find('.gu-input-error').hasClass('gu-input-error-left')).toEqual(true);
    });
    it('接受 label、labelPosition', () => {
      const c = mount(
        <GuInput label="用户名" labelPosition="top"/>
      );
      expect(c.find('.gu-input-label').exists()).toEqual(true);
      expect(c.find('.gu-input-label').text()).toEqual('用户名');
      expect(c.find('.gu-input-label').hasClass('gu-input-error-top')).toEqual(true);
    });
    it('接受 prefix 和 postfix', () => {
      const c = mount(
        <GuInput prefix="手机" postfix="搜索"/>
      );
      expect(c.find('.gu-input-error-prefix').exists()).toEqual(true);
      expect(c.find('.gu-input-error-prefix').text()).toEqual('手机');
      expect(c.find('.gu-input-error-postfix').exists()).toEqual(true);
      expect(c.find('.gu-input-error-postfix').text()).toEqual('搜索');
    });
  })

  describe('事件', () => {

    it('回车可以触发 onPressEnter 事件', () => {
      const fn = jest.fn();

      const c = mount(
        <GuInput onPressEnter={fn}/>
      );
      c.find('.gu-input').simulate('keyDown', {keyCode: 13});
      expect(fn.mock.calls.length).toBe(1);
    });

    it('按键可以触发 onInput 事件', () => {
      const fn = jest.fn();

      const c = mount(
        <GuInput value="hi" size="small" onInput={fn}/>
      );
      c.find('.gu-input').simulate('keyUp', {keyCode: 40});
      expect(fn.mock.calls.length).toBe(1);
    });
  })
})
