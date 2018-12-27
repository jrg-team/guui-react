import * as React from 'react';
import {Breadcrumb, Renderer} from '../lib/index';

export default function (props: any) {
  const routes = [
    {text: '首页', link: '/'},
    {text: '宝贝列表', link: '/goods'},
    {text: '宝贝详情', link: '/goods/123'},
  ];
  const renderer: Renderer = (item, index: number, items) =>
    <span style={{border: '1px solid'}} key={item.link}>{item.text}</span>;
  return (
    <div className="BreadcrumbExample">
      <h2>面包屑</h2>
      <div>
        <Breadcrumb routes={routes}/>
        <Breadcrumb routes={routes} renderer={renderer} separator=">"/>
      </div>
    </div>
  );
}
