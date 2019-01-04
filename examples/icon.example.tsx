import * as React from 'react';
import {Icon} from '../lib/index';
import './icon.example.scss';

export default function (props: any) {
  return (
    <div className="IconExample">
      <h2>图标</h2>
      <div style={{color: '#0086e6'}}>
        <Icon name="alipay"/>
        <Icon name="wechat"/>
        <Icon name="loading"/>
      </div>
    </div>
  );
}
