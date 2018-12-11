import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Aside from '../aside';

configure({adapter: new Adapter()});

describe(Aside.displayName, () => {
  it('DisplayName', () => {
    expect(Aside.displayName).toEqual('Aside');
  });
  describe('props: className', () => {
    it('= xxx', () => {
      const tree = renderer
        .create(<Aside className="xxx"></Aside>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: style', () => {
    it(`= {color: 'red'}`, () => {
      const tree = renderer
        .create(<Aside style={{color: 'red'}}></Aside>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
