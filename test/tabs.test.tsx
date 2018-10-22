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
  })
  it('将 children 显示为内容', () => {
    expect(c.find('#span1').exists()).toEqual(true);
    expect(c.find('#span2').exists()).toEqual(false);
  });

  it('onChange', () => {
    c.setProps({
      onChange: () => {
        console.log('hi')
      }
    })
    c.find('span[data-name="second"]').simulate('click')
  })
});
