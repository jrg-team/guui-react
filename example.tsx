import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import 'examples/global.scss';
import {Layout, Main, Header, Footer, Aside} from './lib/layout/index';
import Home from 'examples/home';
import logo from 'examples/guui.svg';

import LayoutExample from 'examples/layout.example';
import GridExample from 'examples/grid.example';
import ButtonExample from 'examples/button.example';
import InputExample from 'examples/input.example';
import FontExample from 'examples/font.example';
import PopoverExample from 'examples/popover.example';
import CheckExample from 'examples/check.example';
import RadioExample from 'examples/radio.example';
import IconExample from 'examples/icon.example';
import BreadcrumbExample from 'examples/breadcrumb.example';
import DatepickerExample from 'examples/datepicker.example';
import TableExample from 'examples/table.example';
import PagerExample from 'examples/pager.example';
import ListExample from 'examples/list.example';
import ClickOutsideExample from 'examples/clickOutside.example';
import ScrollExample from 'examples/scroll.example';

void 'examples 不要改动这一行代码！'; // tslint:disable-line

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
            <h2>样式</h2>
            <ol>
              <li><Link to="/font">字体</Link></li>
            </ol>
            <h2>布局</h2>
            <ol>
              <li><Link to="/layout">Layout</Link></li>
              <li><Link to="/grid">Grid</Link></li>
            </ol>
            <h2>组件</h2>
            <ol>
              <li><Link to="/icon">Icon</Link></li>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/input">Input</Link></li>
              <li><Link to="/popover">Popover</Link></li>
              <li><Link to="/check">Check</Link></li>
              <li><Link to="/radio">Radio</Link></li>
              <li><Link to="/breadcrumb">Breadcrumb</Link></li>
              <li><Link to="/datepicker">Datepicker</Link></li>
              <li><Link to="/table">Table</Link></li>
              <li><Link to="/pager">Pager</Link></li>
              <li><Link to="/list">List</Link></li>
              <li><Link to="/clickOutside">ClickOutside</Link></li>
              <li><Link to="/scroll">Scroll</Link></li>
              {void 'links 不要改动这一行代码！' /* tslint:disable-line */}
            </ol>
          </Aside>
          <Main className="site-main">
            <Route path="/" exact={true} component={Home}/>
            <Route path="/layout" component={LayoutExample}/>
            <Route path="/grid" component={GridExample}/>
            <Route path="/button" component={ButtonExample}/>
            <Route path="/input" component={InputExample}/>
            <Route path="/popover" component={PopoverExample}/>
            <Route path="/font" component={FontExample}/>
            <Route path="/check" component={CheckExample}/>
            <Route path="/radio" component={RadioExample}/>
            <Route path="/icon" component={IconExample}/>
            <Route path="/breadcrumb" component={BreadcrumbExample}/>
            <Route path="/datepicker" component={DatepickerExample}/>
            <Route path="/table" component={TableExample}/>
            <Route path="/pager" component={PagerExample}/>
            <Route path="/list" component={ListExample}/>
            <Route path="/clickOutside" component={ClickOutsideExample}/>
            <Route path="/scroll" component={ScrollExample}/>
            {void 'routes 不要改动这一行代码！' /* tslint:disable-line */}
          </Main>
        </Layout>
        <Footer className="site-footer">footer</Footer>
      </Layout>
    </Router>
  </div>
  , document.querySelector('#root'));
