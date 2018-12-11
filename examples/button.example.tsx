import * as React from 'react';
import Button from '../lib/button/button';

export default function (props: any) {
  return (
    <div className="ButtonExample">
      <h2>普通</h2>
      <div style={{padding: 8}}>
        <Button>普通按钮</Button>
        <Button level="important">重要按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <h2>虚空按钮</h2>
      <div style={{padding: 8, background: '#aaa'}}>
        <Button ghost={true}>普通按钮</Button>
        <Button ghost={true} level="important">重要按钮</Button>
        <Button ghost={true} level="danger">危险按钮</Button>
      </div>
    </div>
  );
}
