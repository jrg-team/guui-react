import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import GuUpload from '../lib/upload/upload'

configure({adapter: new Adapter()});

xdescribe('GuUpload 简单属性', () => {
  let c: ReactWrapper
  beforeEach(() => {
    c = mount(
      <GuUpload></GuUpload>
    );
  })

  it('接受 accept 属性', () => {

  })

  it('接受 url 属性', () => {

  })

  it('接受 disabled 属性', () => {

  })

  it('接受 disabled 属性', () => {

  })
})

xdescribe('GuUpload 复杂属性', () => {
  let c: ReactWrapper

  beforeEach(() => {
    c = mount(
      <GuUpload></GuUpload>
    );
  })

  it('接受 fileList 属性, 展示图片列表', () => {

  })

  it('onChange 事件获取 file 信息', () => {

  })

})
