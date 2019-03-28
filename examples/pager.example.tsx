import * as React from 'react';
import {Pager} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [page, setPage] = useState(5);

  return (
    <div className="PagerExample">
      <h2>普通示例</h2>
      <div>
        <Pager current={page} total={100} onChange={value => setPage(value)}/>
      </div>
    </div>
  );
}
