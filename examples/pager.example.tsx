import * as React from 'react';
import {Pager} from '../lib/index';

export default function (props: any) {
  return (
    <div className="PagerExample">
      <h2>普通示例</h2>
      <div>
        <Pager current={1} total={3} />
        <Pager current={5} total={10} />
      </div>
    </div>
  );
}
