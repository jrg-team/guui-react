import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../footer';

configure({adapter: new Adapter()});

describe(Footer.displayName, () => {
  it('DisplayName', () => {
    expect(Footer.displayName).toEqual('Footer');
  });
  describe('props: className', () => {
    it('= xxx', () => {
      const tree = renderer
        .create(<Footer className="xxx"></Footer>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: style', () => {
    it(`= {color: 'red'}`, () => {
      const tree = renderer
        .create(<Footer style={{color: 'red'}}></Footer>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
