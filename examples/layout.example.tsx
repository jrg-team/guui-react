import * as React from 'react';
import {Layout, Main, Header, Footer, Aside} from 'lib/layout/index';
import 'stylesheets/examples/layout.example.scss';

function LayoutExample(props: any) {
  return (
    <div>
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
      <Layout dir="vertical" className="LayoutExample">
        <Header className="header">
          header
        </Header>
        <Layout dir="horizontal">
          <Main className="main">main</Main>
          <Aside className="aside">aside</Aside>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
    </div>
  );
}

export default LayoutExample;
