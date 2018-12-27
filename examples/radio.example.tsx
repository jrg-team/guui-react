import * as React from 'react';
import {Radio} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [value, setValue] = useState('v1');
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };
  return (
    <div className="RadioExample">
      <h2>Radio</h2>
      <div>
        <Radio name="g1" checked={value === 'v1'} value="v1" onChange={onChange}>
          文字
        </Radio>
        <Radio name="g1" checked={value === 'v2'} value="v2" onChange={onChange}>
          文字
        </Radio>
      </div>
    </div>
  );
}
