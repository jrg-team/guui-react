import * as React from 'react';

export default function (props: any) {
  return (
    <div className="FontExample">
      <h2>文字</h2>
      <div style={{padding: '8px 0'}}>
        <h1 className="h1">一级标题</h1>
        <h2>二级标题</h2>
        <h3>三级标题</h3>
        <h4>四级标题</h4>
        <h5>五级标题</h5>
        <h6>六级标题</h6>
        <p>段落正文</p>
      </div>
    </div>
  );
}
