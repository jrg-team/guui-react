import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Row from '../row';

configure({adapter: new Adapter()});

describe(Row.displayName, () => {
  it('DisplayName', () => {
    expect(Row.displayName).toEqual('Row');
  });

  describe('className', () => {
    it(' = xxx', () => {
      const tree = renderer
        .create(<Row className="xxx"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('style', () => {
    it(` = {color: 'red'}`, () => {
      const tree = renderer
        .create(<Row style={{color: 'red'}}></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('gutter', () => {
    it(` = 16`, () => {
      const tree = renderer
        .create(<Row gutter={16}></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('align', () => {
    it(` = right`, () => {
      const tree = renderer
        .create(<Row align="right"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(` = center`, () => {
      const tree = renderer
        .create(<Row align="center"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(` = spaceBetween`, () => {
      const tree = renderer
        .create(<Row align="spaceBetween"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(` = spaceAround`, () => {
      const tree = renderer
        .create(<Row align="spaceAround"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('verticalAlign', () => {
    it(`= center`, () => {
      const tree = renderer
        .create(<Row verticalAlign="center"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it(`= bottom`, () => {
      const tree = renderer
        .create(<Row verticalAlign="bottom"></Row>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
