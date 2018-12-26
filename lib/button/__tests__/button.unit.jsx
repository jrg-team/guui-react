import {mount} from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button'


describe(Button.displayName, () => {
  it('DisplayName', () => {
    expect(Button.displayName).toEqual('Button')
  })
  it('prop icon = alipay', () => {
    const tree = renderer
      .create(<Button icon="alipay"><span>Click Me</span></Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop iconPosition = right', () => {
    const tree = renderer
      .create(<Button icon="alipay" iconPosition="right">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop iconFill = red', () => {
    const tree = renderer
      .create(<Button icon="alipay" iconFill="red">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop size = small', () => {
    const tree = renderer
      .create(<Button size="small">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop size = big', () => {
    const tree = renderer
      .create(<Button size="big">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop level = import', () => {
    const tree = renderer
      .create(<Button level="important">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop level = danger', () => {
    const tree = renderer
      .create(<Button level="danger">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop ghost = true', () => {
    const tree = renderer
      .create(<Button ghost={true}>Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop badge = 42', () => {
    const tree = renderer
      .create(<Button badge={42}>Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop href = http://qq.com', () => {
    const tree = renderer
      .create(<Button href="http://qq.com">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop target = x', () => {
    const tree = renderer
      .create(<Button href="http://qq.com" target="x">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop disabled = true', () => {
    const fn = jest.fn()
    const c = mount(<Button onClick={fn} disabled={true}>Click Me</Button>)
    c.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(0)
  })
  it('prop loading = true', () => {
    const tree = renderer
      .create(<Button loading={true}>Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('prop type = submit', () => {
    const tree = renderer
      .create(<Button type="submit">Click Me</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should response to click event', () => {
    const fn = jest.fn()
    const c = mount(<Button onClick={fn}>Click Me</Button>)
    c.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
  })
  it('should prevent disabled link', () => {
    const fn = jest.fn()
    const c = mount(<Button href="http://qq.com" disabled={true}>Click Me</Button>)
    c.find('a').simulate('click')
    expect(fn.mock.calls.length).toEqual(0)
  })
  it('should switch icon when loading turn to true', () => {
    const fn = jest.fn()
    const c = mount(<Button icon="alipay" loading={false}>Click Me</Button>)
    expect(c.find('use').getDOMNode().getAttribute('xlink:href')).toEqual('#alipay')
    c.setProps({loading: true})
    expect(c.find('use').getDOMNode().getAttribute('xlink:href')).toEqual('#loading')
  })
  it('should animate when loading turn to true', () => {
    const fn = jest.fn()
    const c = mount(<Button loading={false}>Click Me</Button>)
    expect(c.find('use').exists()).toEqual(false)
    c.setProps({loading: true})
    expect(c.find('use').getDOMNode().getAttribute('xlink:href')).toEqual('#loading')
  })
})
