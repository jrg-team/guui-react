import * as React from 'react';
import Button from '../lib/button/button';
import {useState} from 'react';

export default function (props: any) {
  const [state, setState] = useState({loading: false});
  return (
    <div className="ButtonExample">
      <h2>普通按钮</h2>
      <div style={{padding: '8px 0'}}>
        <Button>普通按钮</Button>
        <Button level="important">重要按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div style={{padding: '8px 0'}}>
        <Button disabled={true}>普通按钮</Button>
        <Button level="important" disabled={true}>重要按钮</Button>
        <Button level="danger" disabled={true}>危险按钮</Button>
      </div>
      <h2>带图标的按钮</h2>
      <div style={{padding: '8px 0'}}>
        <Button icon="alipay" iconFill="#00AAEE">普通按钮</Button>
        <Button icon="wechat" iconFill="#3CB034">重要按钮</Button>
        <Button icon="loading">危险按钮</Button>
      </div>
      <div style={{padding: '8px 0'}}>
        <Button icon="alipay" iconPosition="right" iconFill="#00AAEE">普通按钮</Button>
        <Button icon="wechat" iconPosition="right" iconFill="#3CB034">重要按钮</Button>
        <Button icon="loading" iconPosition="right">危险按钮</Button>
      </div>
      <h2>可大可小</h2>
      <div style={{padding: '8px 0'}}>
        <Button size="big" level="important">大按钮</Button>
        <Button level="important">正常按钮</Button>
        <Button size="small" level="important">小按钮</Button>
      </div>
      <h2>设置为loading</h2>
      <div style={{padding: '8px 0'}}>
        <Button level="important" loading={true}>加载中按钮</Button>
        <Button level="important" loading={state.loading} icon="alipay"
          onClick={() => setState({loading: !state.loading})}
        >点我就会loading</Button>
        <Button level="important" loading={state.loading}
          onClick={() => setState({loading: !state.loading})}
        >点我就会loading</Button>
      </div>
      <h2>链接</h2>
      <div style={{padding: '8px 0'}}>
        <Button level="important" href="http://baidu.com">百度</Button>
        <Button level="important" href="http://baidu.com" target="_blank">新窗口打开百度</Button>
        <Button level="important" href="http://baidu.com" disabled={true}>禁用</Button>
      </div>
      <h2>带交标</h2>
      <div style={{padding: '8px 0'}}>
        <Button badge={42} size="big">按钮</Button>
        <Button badge={42}>按钮</Button>
        <Button badge="42" size="small">按钮</Button>
      </div>
      <h2>虚空按钮</h2>
      <div style={{padding: 8, background: '#000'}}>
        <Button ghost={true}>普通按钮</Button>
        <Button ghost={true} level="important">重要按钮</Button>
        <Button ghost={true} level="danger">危险按钮</Button>
      </div>
      <div style={{padding: 8, background: '#000'}}>
        <Button ghost={true} disabled={true}>普通按钮</Button>
        <Button ghost={true} level="important" disabled={true}>重要按钮</Button>
        <Button ghost={true} level="danger" disabled={true}>危险按钮</Button>
      </div>

    </div>
  );
}
