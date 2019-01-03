import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import {ReactChild} from 'react';
import './breadcrumb.scss';

const componentName = 'Breadcrumb';
const sc = createScopedClasses(componentName);

export interface IBreadcrumbItem {
  text: string;
  link: string;
}

export type BI = IBreadcrumbItem;

export type Renderer = (item: BI, index: number, items: BI[]) => ReactChild;

export interface IProps extends IStyledProps {
  routes?: BI[];
  separator?: ReactChild;
  renderer?: Renderer;
}

const renderItem: Renderer = (item, index, array) =>
  index === array.length - 1 ?
    <span className={sc('item')} key={item.link}>{item.text}</span> :
    <a className={sc('link')} href={item.link} key={item.link}>{item.text}</a>;
const createSeparator = (key: string | number, separator: ReactChild) =>
  <span className={sc('separator')} key={key}>{separator}</span>;

const Breadcrumb: GFC<IProps> = (props) => {
  const addSeparator: (sum: ReactChild[], item: ReactChild, index: number, array: ReactChild[]) => ReactChild[] =
    (sum, item, index, array) => sum.concat(array[index + 1] ? [item, createSeparator(index, props.separator!)] : [item]);
  const content = props.routes && props.routes.map<ReactChild>(props.renderer!).reduce<ReactChild[]>(addSeparator, []);
  return (
    <div className={sc()}>
      {content}
    </div>
  );
};
Breadcrumb.displayName = componentName;
Breadcrumb.defaultProps = {
  separator: '/',
  renderer: renderItem,
};
Breadcrumb.propTypes = {};
export default Breadcrumb;
