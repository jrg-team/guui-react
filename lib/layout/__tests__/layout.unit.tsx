import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Layout from '../layout';

configure({adapter: new Adapter()});

describe(Layout.displayName, () => {
  it('DisplayName', () => {
    expect(Layout.displayName).toEqual('Layout');
  });
  describe('props: dir', () => {
    it('default = vertical', () => {
      const tree = renderer
        .create(<Layout></Layout>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('= horizontal', () => {
      const tree = renderer
        .create(<Layout dir="horizontal"></Layout>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: className', () => {
    it('= xxx', () => {
      const tree = renderer
        .create(<Layout className="xxx"></Layout>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: style', () => {
    it(`= {color: 'red'}`, () => {
      const tree = renderer
        .create(<Layout style={{color: 'red'}}></Layout>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
