import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Collapse from '../lib/collapse';
import CollapseItem from '../lib/collapseItem';

configure({adapter: new Adapter()});

describe('Collapse', () => {
  let c: ReactWrapper
  beforeEach(() => {
    c = mount(
      <Collapse activeKey="first">
        <CollapseItem title="我是标题1" name="first">
          <span id="span1"></span>
        </CollapseItem>
        <CollapseItem title="我是标题2" name="second">
          <span id="span2"></span>
        </CollapseItem>
      </Collapse>
    );
    console.log(c.html());
  });
  it('接受 title ',  () => {
    expect(c.find('div[data-name="first"]').text()).toEqual('我是标题1');
  });

})
