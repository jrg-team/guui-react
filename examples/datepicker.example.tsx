import * as React from 'react';
import {Datepicker} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [d, setD] = useState(new Date());
  return (
    <div className="DatepickerExample">
      <h2>普通示例</h2>
      <div>
        <Datepicker value={d} onChange={date => setD(date)}/>
      </div>
    </div>
  );
}
