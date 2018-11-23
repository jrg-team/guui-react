import {configure, mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Pagination from '../../lib/pagination';

configure({adapter: new Adapter()});

describe('Pagination', () => {
  let c: ReactWrapper
  const fn = jest.fn()
  beforeEach(() => {
    c = mount(
      <Pagination totalPage={4} currentPage={2} onChange={fn}></Pagination>
    );
  })
  it('接受 totalPage', () => {
    expect(c.find('.gu-pagination-item').length).toEqual(4);
  });
  it('接受currentPage', () => {
    expect(c.find('span[data-name=2]').hasClass('gu-pagination-active')).toEqual(true)
  })
  it('onChange', () => {
    c.find('.gu-pagination-prev').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)

    c.find('.gu-pagination-next').simulate('click')
    expect(fn.mock.calls.length).toEqual(2)

    c.find('span[data-name=2]').simulate('click')
    expect(fn.mock.calls.length).toEqual(3)
  });
})
