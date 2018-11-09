import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import Tabs from '../lib/tabs';
import Tab from '../lib/tab';

configure({adapter: new Adapter()});

xdescribe('Tabs', () => {
  let c: ReactWrapper
  beforeEach(() => {
    c = mount(
      <Tabs selected="first">
        <Tab title="tab1" name="first">
          <span id="span1"></span>
        </Tab>
        <Tab title="tab2" name="second">
          <span id="span2"></span>
        </Tab>
      </Tabs>
    );
    console.log(c.html());
  })
  it('将 children 显示为内容', () => {
    expect(c.find('#span1').exists()).toEqual(true);
    expect(c.find('#span2').exists()).toEqual(false);
  });

  it('auto 为 false 的 onChange', () => {
    const fn = (e: string) => {
      expect(e).toEqual('second')
    }

    c.setProps({
      onChange: fn
    })
    c.find('span[data-name="second"]').simulate('click')
  })

  it('auto 为 true 的 onChange', () => {
    const fn = jest.fn();

    c = mount(
      <Tabs selected="first" onChange={fn} autoChange={true}>
        <Tab title="tab1" name="first">
          <span id="span1"></span>
        </Tab>
        <Tab title="tab2" name="second">
          <span id="span2"></span>
        </Tab>
      </Tabs>
    );

    c.find('span[data-name="second"]').simulate('click')
    expect(c.find('#span1').exists()).toEqual(false);
    expect(c.find('#span2').exists()).toEqual(true);
    expect(fn.mock.calls.length).toBe(1);

  })
});
