import {mount} from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Pager from '../pager'


describe(Pager.displayName, () => {
    it('DisplayName', () => {
        expect(Pager.displayName).toEqual('Pager')
    })
    it('prop current = 1', () => {
        const tree = renderer
            .create(<Pager current={1} total={3}></Pager>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('prop total = 5', () => {
        const tree = renderer
            .create(<Pager current={2} total={5}></Pager>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('应该要有两个省略号', () => {
        const tree = renderer
            .create(<Pager current={5} total={10}></Pager>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('应该要有一个省略号', () => {
        const tree = renderer
            .create(<Pager current={8} total={10}></Pager>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('点击对应按钮 current发生对应变化', () => {
        const c = mount(<Pager current={1} total={5} onChange={ (value)=>{c.setProps({current: value})} }/>);
        expect(c.find('.gu-pager-active').text()).toEqual("1")
        c.find('.gu-pager-item').last().simulate('click')
        expect(c.find('.gu-pager-active').text()).toEqual("5")
    });
    it('click prev', () => {
        const c = mount(<Pager current={2} total={5}
                               onChange={ (value)=>{c.setProps({current: value})} }/>);
        c.find('.gu-pager-prev').simulate('click');
        expect(c.find('.gu-pager-active').text()).toEqual("1")
    });
    it('click next', () => {
        const c = mount(<Pager current={2} total={5}
                               onChange={ (value)=>{c.setProps({current: value})} }/>)
        c.find('.gu-pager-next').simulate('click')
        expect(c.find('.gu-pager-active').text()).toEqual("3")
    });
    it('click prev ...', () => {
        const c = mount(<Pager current={5} total={10}
                               onChange={ (value)=>{c.setProps({current: value})} }/>)
        c.find('.gu-pager-separator').first().simulate('click')
        expect(c.find('.gu-pager-active').text()).toEqual("1")
    });
    it('click next ...', () => {
        const c = mount(<Pager current={6} total={100}
                               onChange={ (value)=>{c.setProps({current: value})} }/>)
        c.find('.gu-pager-separator').last().simulate('click')
        expect(c.find('.gu-pager-active').text()).toEqual("11")
    });
})
