import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import GuUploader from '../../lib/uploader/uploader'

jest.mock('../../lib/http')

configure({adapter: new Adapter()});

xdescribe('GuUploader 简单属性', () => {

  it('必填 url、method、name、fileList、responseParser 属性', () => {
    console.error = jest.fn()
    mount(
      <GuUploader url="xxx" method="POST" name="file" fileList={[]} responseParser={text => text}/>
    );
    expect(console.error).not.toBeCalled()
    mount(
      <GuUploader method="POST" name="file" fileList={[]} responseParser={text => text}/> // 没有url
    );
    expect(console.error).toBeCalledTimes(1)
    mount(
      <GuUploader url="xxx" name="file" fileList={[]} responseParser={text => text}/> // 没有 method
    );
    expect(console.error).toBeCalledTimes(2)
    mount(
      <GuUploader url="xxx" method="POST" fileList={[]} responseParser={text => text}/> // 没有 name
    );
    expect(console.error).toBeCalledTimes(3)
    mount(
      <GuUploader url="xxx" method="POST" name="file" responseParser={text => text}/> // 没有 fileList
    );
    expect(console.error).toBeCalledTimes(4)
    mount(
      <GuUploader url="xxx" method="POST" name="file" fileList={[]}/> // 没有 fileList
    );
    expect(console.error).toBeCalledTimes(5)
  });

  it('接受 accept 属性', () => {
    const c = mount(
      <GuUploader url="xxx" method="POST" name="file" fileList={[]}
        accept="images/*"/>
    );
    expect(c.find('input[type="file"]').props().accept).toEqual('images/*')
  });

  it('点击上传一个文件', (done) => {
    let key: string
    const uploaded = (error: any, file: any) => {
      expect(file.url).toEqual(`http://cdn.com/${key}`)
      done()
    }
    const parser = (response: string) => {
      key = JSON.parse(response).key
      return `http://cdn.com/${key}`
    }
    const c = mount(
      <GuUploader url="xxx" method="POST" name="file" fileList={[]} onUploaded={uploaded} responseParser={parser}/>
    );
    const file = new File(['hello'], '1.txt')
    c.find('input[type="file"]').simulate('change', {target: {files: [file]}})
  });

  it('接受 disabled 属性', () => {

  })
});
