import * as React from 'react';
import {Datepicker} from '../lib/index';

export default function (props: any) {
  return (
    <div className="DatepickerExample">
      <h2>普通示例</h2>
      <div>
        <Datepicker/>
      </div>
    </div>
  );
}
