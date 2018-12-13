import * as React from 'react';
import Button from '../lib/button/button';
import {useState} from 'react';

export default function (props: any) {
  const [state, setState] = useState({loading: false});
  return (
    <div className="ButtonExample">
      <h2>普通按钮</h2>
      <div style={{padding: 8}}>
        <Button>普通按钮</Button>
        <Button level="important">重要按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div style={{padding: 8}}>
        <Button disabled={true}>普通按钮</Button>
        <Button level="important" disabled={true}>重要按钮</Button>
        <Button level="danger" disabled={true}>危险按钮</Button>
      </div>
      <h2>虚空按钮</h2>
      <div style={{padding: 8, background: '#aaa'}}>
        <Button ghost={true}>普通按钮</Button>
        <Button ghost={true} level="important">重要按钮</Button>
        <Button ghost={true} level="danger">危险按钮</Button>
      </div>
      <div style={{padding: 8, background: '#aaa'}}>
        <Button ghost={true} disabled={true}>普通按钮</Button>
        <Button ghost={true} level="important" disabled={true}>重要按钮</Button>
        <Button ghost={true} level="danger" disabled={true}>危险按钮</Button>
      </div>
      <h2>带图标的按钮</h2>
      <div style={{padding: 8}}>
        <Button icon="alipay" iconFill="#00AAEE">普通按钮</Button>
        <Button icon="wechat" iconFill="#3CB034">重要按钮</Button>
        <Button icon="loading">危险按钮</Button>
      </div>
      <h2>可大可小</h2>
      <div style={{padding: 8}}>
        <Button size="big" level="important">大按钮</Button>
        <Button level="important">正常按钮</Button>
        <Button size="small" level="important">小按钮</Button>
      </div>
      <h2>设置为loading</h2>
      <div style={{padding: 8}}>
        <Button level="important" loading={true}>加载中按钮</Button>
        <Button level="important" loading={state.loading} icon="alipay"
          onClick={() => setState({loading: !state.loading})}
        >点我就会loading</Button>
      </div>
    </div>
  );
}
