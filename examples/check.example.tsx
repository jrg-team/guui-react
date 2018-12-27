import * as React from 'react';
import {Check} from '../lib/index';
import {useState} from 'react';

export default function (props: any) {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const onChange = (e: React.FormEvent) => {
    setChecked((e.target as HTMLInputElement).checked);
  };
  const onChange2 = (e: React.FormEvent) => {
    setChecked2((e.target as HTMLInputElement).checked);
  };
  return (
    <div className="CheckExample">
      <h2>Check</h2>
      <div>
        <Check checked={checked} value="v1" onChange={onChange}>
          文字
        </Check>
        <Check checked={checked2} value="v1" onChange={onChange2}>
          文字
        </Check>
      </div>
    </div>
  );
}
