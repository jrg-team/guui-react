import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Main, Layout, Header, Footer, Aside} from '../index';

configure({adapter: new Adapter()});

describe('Layout', () => {
  it('combines Main/Header/Footer/Aside', () => {
    const tree = renderer
      .create(
        <Layout>
          <Header></Header>
          <Layout dir="horizontal">
            <Aside></Aside>
            <Main></Main>
          </Layout>
          <Footer></Footer>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('combines Main/Header/Footer/Aside in another way', () => {
    const tree = renderer
      .create(
        <Layout>
          <Aside></Aside>
          <Layout>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </Layout>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
