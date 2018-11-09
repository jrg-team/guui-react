import {configure,  mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import GuDialog from '../lib/dialog';
import {Button as GuButton} from '../lib/button';

configure({adapter: new Adapter()});

xdescribe('Default Dialog', () => {
  let c: ReactWrapper
  beforeEach(() => {
    c = mount(
      <GuDialog visible={true}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
  })

  it('将 children 显示为内容', () => {
    expect(c.find('.content').children().html()).toEqual('<p> 这是一段文字 </p>');
  });

  it('visible 为 true 显示为内容', () => {
    expect(c.exists()).toEqual(true);
  });

  it('closable 为 true 显示关闭按钮', () => {
    expect(c.find('.gu-dialog-close').exists()).toEqual(true);
  });
})

describe('Dialog', () => {
  let c: ReactWrapper

  it('visible 为 false 不显示内容', () => {
    c = mount(
      <GuDialog visible={false}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    expect(c.find('.gu-dialog').exists()).toEqual(false);
  });

  it('closable 为 false 不显示关闭按钮', () => {
    c = mount(
      <GuDialog visible={true} closable={false}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    expect(c.find('.gu-dialog-close').exists()).toEqual(false);
  });

  it('可以接受 title', () => {
    c = mount(
      <GuDialog visible={true} title={'这是标题'}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    expect(c.find('.gu-dialog-title').text()).toEqual('这是标题');
  });

  it('footer 为 null 不显示 footer', () => {
    c = mount(
      <GuDialog visible={true} footer={null}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    expect(c.find('.gu-dialog-footer').exists()).toEqual(false);
  });


  it('接受 okText 和 cancelText', () => {
    c = mount(
      <GuDialog visible={true} cancelText="取消消" okText="确定定">
        <p> 这是一段文字 </p>
      </GuDialog>
    );

    expect(c.find('.gu-button').first().text()).toEqual('取消消');
    expect(c.find('.gu-button').last().text()).toEqual('确定定');
  });

  it('接受 onConfirm 和 onCancel', () => {
    const okFn = jest.fn();
    const cancelFn = jest.fn();
    c = mount(
      <GuDialog visible={true} onConfirm={okFn} onCancel={cancelFn}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    c.find('.gu-button').first().simulate('click')
    expect(cancelFn.mock.calls.length).toBe(1);
    c.find('.gu-button').last().simulate('click')
    expect(okFn.mock.calls.length).toBe(1);
  });

  it('接受自定义 footer', () => {
    const okFn = jest.fn();
    const cancelFn = jest.fn();

    c = mount(
      <GuDialog visible={true} footer={[
        <GuButton key="cancel" onClick={cancelFn}>Return</GuButton>,
        <GuButton key="ok" onClick={okFn}>Submit</GuButton>
      ]}>
        <p> 这是一段文字 </p>
      </GuDialog>
    );
    expect(c.find('.gu-dialog-footer').exists()).toEqual(true);
    c.find('.gu-button').first().simulate('click')
    expect(cancelFn.mock.calls.length).toBe(1);
    c.find('.gu-button').last().simulate('click')
    expect(okFn.mock.calls.length).toBe(1);
  });
});
