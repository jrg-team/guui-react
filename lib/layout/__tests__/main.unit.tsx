import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from '../main';

configure({adapter: new Adapter()});

describe(Main.displayName, () => {
  describe('props: className', () => {
    it('= xxx', () => {
      const tree = renderer
        .create(<Main className="xxx"></Main>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props: style', () => {
    it(`= {color: 'red'}`, () => {
      const tree = renderer
        .create(<Main style={{color: 'red'}}></Main>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
