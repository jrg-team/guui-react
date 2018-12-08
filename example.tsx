import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import 'stylesheets/examples/home.scss';
import 'stylesheets/_index.scss';
import {Layout, Main, Header, Footer, Aside} from 'lib/layout/index';
import LayoutExample from './examples/layout.example';

ReactDOM.render(
  <div className="page">
    <Router>
      <Layout dir="vertical">
        <Header className="header">
          header
        </Header>
        <Layout dir="horizontal">
          <Aside className="aside">
            <Link to="/layout">layout</Link>
          </Aside>
          <Main className="main">
            <Route path="/layout" exact={true} component={LayoutExample}/>
          </Main>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
    </Router>
  </div>
  , document.querySelector('#root'));
