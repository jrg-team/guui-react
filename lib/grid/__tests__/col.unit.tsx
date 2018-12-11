import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Col from '../col';

configure({adapter: new Adapter()});

describe(Col.displayName, () => {
  it('DisplayName', () => {
    expect(Col.displayName).toEqual('Col');
  });

  describe('className', () => {
    it(' = xxx', () => {
      const tree = renderer
        .create(<Col className="xxx"></Col>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('style', () => {
    it(` = {color: 'red'}`, () => {
      const tree = renderer
        .create(<Col style={{color: 'red'}}></Col>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('span', () => {
    it(` = 2`, () => {
      const tree = renderer
        .create(<Col span={2}></Col>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('offset', () => {
    it(` = 1`, () => {
      const tree = renderer
        .create(<Col offset={1}></Col>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('gutter', () => {
    it(`= 16`, () => {
      const tree = renderer
        .create(<Col gutter={16}></Col>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
