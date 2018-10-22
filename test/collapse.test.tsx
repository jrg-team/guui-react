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
      <Collapse selectedItems={['first', 'second']}>
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
  xit('first 和 second 打开状态', () => {
    expect(c.find('div[data-name="first"]').find('gu-collapse-item-active').exists()).toEqual(true);
    expect(c.find('div[data-name="second"]').find('gu-collapse-item-active').exists()).toEqual(true);
  });
  beforeEach(() => {
    c = mount(
      <Collapse selectedItems={['first', 'second']} single={true}>
        <CollapseItem title="我是标题1" name="first">
          <span id="span1"></span>
        </CollapseItem>
        <CollapseItem title="我是标题2" name="second">
          <span id="span2"></span>
        </CollapseItem>
      </Collapse>
    );
  });
  xit('接受 single', () => {
    c.find('div[data-name="first"]').simulate('click')
    expect(c.find('div[data-name="second"]').find('gu-collapse-item-active').exists()).toEqual(false)
  });
  xit('接受title', () => {
    expect(c.find('div[data-name="first"]').text()).toEqual('我是标题1')
  });
  xit('接受name', () => {
    expect(c.find('div[data-name="first"]').exists()).toEqual(true)
  });
  xit('onChange', () => {
    c.setProps({
      onChange: () => {
        console.log('hi')
      }
    })
    c.find('gu-collapse').simulate('click')
  })

})
