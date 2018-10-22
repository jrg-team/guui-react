import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Collapse from '../lib/collapse';
import CollapseItem from '../lib/collapseItem';

configure({adapter: new Adapter()});

xdescribe('Collapse', () => {
  let c: ReactWrapper
  const expectOpen = (name: string) => {
    expect(c.find(`[name="${name}"]`).getDOMNode().classList.contains('gu-collapse-item-active')).toEqual(true)
  }
  const expectClose = (name: string) => {
    expect(c.find(`[name="${name}"]`).getDOMNode().classList.contains('gu-collapse-item-active')).toEqual(false)
  }
  it('接受 selectedItems', () => {
    c = mount(
      <Collapse selectedItems={['first', 'second']}>
        <CollapseItem title="我是标题1" name="first"> <span id="span1"></span> </CollapseItem>
        <CollapseItem title="我是标题2" name="second"> <span id="span2"></span> </CollapseItem>
      </Collapse>
    );
    expectOpen('first')
    expectOpen('second')
  });

  it('接受 single', () => {
    c = mount(
      <Collapse selectedItems={['first']}>
        <CollapseItem title="我是标题1" name="first"> <span id="span1"></span> </CollapseItem>
        <CollapseItem title="我是标题2" name="second"> <span id="span2"></span> </CollapseItem>
      </Collapse>
    );
    c.find('[name="first"]').simulate('click')
    expectClose('first')
    expectOpen('second')
  });

  it('触发 onChange', () => {
    const fn = jest.fn()
    c = mount(
      <Collapse selectedItems={[]} onChange={fn}>
        <CollapseItem title="我是标题1" name="first"> <span id="span1"></span> </CollapseItem>
        <CollapseItem title="我是标题2" name="second"> <span id="span2"></span> </CollapseItem>
      </Collapse>
    );
    c.find('[name="first"]').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
    expect(fn.mock.calls[0][0]).toEqual(['first'])
    c.find('[name="second"]').simulate('click')
    expect(fn.mock.calls.length).toEqual(2)
    expect(fn.mock.calls[1][0]).toEqual(['first', 'second'])
  })
})

describe('CollapseItem', () => {
  it('接受 title 和 name', () => {
    const c = mount(
      <CollapseItem title="title1" name="first"> <span id="span1"></span> </CollapseItem>
    )
    expect(c.find('header').text()).toEqual('title1')
  })
})
