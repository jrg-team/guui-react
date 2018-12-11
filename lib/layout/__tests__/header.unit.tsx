import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from '../header';

configure({adapter: new Adapter()});

describe(Header.displayName, () => {
  it('DisplayName', () => {
    expect(Header.displayName).toEqual('Header');
  });
  describe('props: className', () => {
    it('= xxx', () => {
      const tree = renderer
        .create(<Header className="xxx"></Header>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: style', () => {
    it(`= {color: 'red'}`, () => {
      const tree = renderer
        .create(<Header style={{color: 'red'}}></Header>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
