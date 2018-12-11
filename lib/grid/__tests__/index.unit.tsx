import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Row, Col} from '../index';

configure({adapter: new Adapter()});

describe('Grid', () => {
  it('combines Row and Col', () => {
    const tree = renderer
      .create(
        <Row>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
