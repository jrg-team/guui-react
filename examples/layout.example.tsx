import * as React from 'react';
import {Layout, Main, Header, Footer, Aside} from '../lib/layout/index';
import './layout.example.scss';

function LayoutExample(props: any) {
  return (
    <div>
      <h1>布局组件</h1>
      <h2>示例1</h2>
      <p>经典布局</p>
      <Layout dir="vertical" className="LayoutExample">
        <Header className="header">
          header
        </Header>
        <Layout dir="horizontal">
          <Aside className="aside">aside</Aside>
          <Main className="main">main</Main>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h2>示例2</h2>
      <p>经典布局</p>
      <Layout dir="horizontal" className="LayoutExample">
        <Aside className="aside">aside</Aside>
        <Layout>
          <Header className="header">header</Header>
          <Main className="main">main</Main>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutExample;
