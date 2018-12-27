import * as React from 'react';
import {Radio} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [value, setValue] = useState('v1');
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };
  return (
    <div className="CheckExample">
      <h2>Checkbox</h2>
      <div>
        <Radio name="g1" checked={value === 'v1'} value="v1" onChange={onChange}/>
      </div>
      <div>
        <Radio name="g1" checked={value === 'v2'} value="v2" onChange={onChange}/>
      </div>
    </div>
  );
}
