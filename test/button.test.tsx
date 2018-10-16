import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
// import renderer from 'react-test-renderer';
import GuButton from '../lib/button';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  // const component = renderer.create(
  //   <Button>Hi</Button>,
  // );
  const component = shallow(<GuButton>Hi</GuButton>);
  expect(component.text()).toEqual('Hi');

  // expect(component.toJSON()).toMatchSnapshot();

});
