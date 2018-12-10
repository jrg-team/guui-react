import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import 'examples/global.scss';
import 'stylesheets/_index.scss';
import {Layout, Main, Header, Footer, Aside} from 'lib/layout/index';
import LayoutExample from 'examples/layout.example';
import Home from 'examples/home';
import logo from 'examples/guui.svg';

ReactDOM.render(
  <div>
    <Router>
      <Layout dir="vertical" className="site-wrapper">
        <Header className="site-header">
          <div className="site-logo">
            <img src={logo} alt="" height="48"/>
          </div>
          <div className="actions">
            <ul className="site-nav">
              <li>快速上手</li>
              <li>文档</li>
            </ul>
          </div>
        </Header>
        <Layout dir="horizontal" className="site-body">
          <Aside className="site-aside">
            <h2>入门</h2>
            <ol>
              <li><Link to="/">快速上手</Link></li>
              <li><Link to="/">安装</Link></li>
              <li><Link to="/">配置</Link></li>
            </ol>
            <h2>组件</h2>
            <ol>
              <li><Link to="/layout">Layout</Link></li>
              <li><Link to="/table">Table</Link></li>
            </ol>
          </Aside>
          <Main className="site-main">
            <Route path="/" exact={true} component={Home}/>
            <Route path="/layout" component={LayoutExample}/>
          </Main>
        </Layout>
        <Footer className="site-footer">footer</Footer>
      </Layout>
    </Router>
  </div>
  , document.querySelector('#root'));
