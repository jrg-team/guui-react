import * as React from 'react';
import Input from '../lib/input/input';
import {useState} from 'react';

export default function (props: any) {
  const [value, setValue] = useState('文本输入框');
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };
  return (
    <div className="ButtonExample">
      <h2>普通按钮</h2>
      <div style={{padding: '8px 0'}}>
        <Input size={10} maxLength={20} value={value} onChange={onChange}/>
        <Input size={20} value={value} onChange={onChange}/>
        <Input size={10} disabled={true} value={value}/>
      </div>
    </div>
  );
}
