import {ReactElement} from 'react';
import MenuItem from './menuItem';
import MenuDir from './menuDir';
import * as React from 'react';

const MenuChildrenValidator = (props: any, propName: string, componentName: string) => {
  const children = props[propName];
  if (!children || children.length === 0) {
    return new Error(`Vmenu 必须含有子标签`);
  }
  let error = null;
  React.Children.forEach(children, (child: ReactElement<any>) => {
    if (child.type !== MenuItem && child.type !== MenuDir) {
      error = new Error(`Vmenu 的子标签必须是 <Menu.Item/> 或者 <Menu.Dir/>`);
    }
  });
  return error;
};

export default MenuChildrenValidator;
