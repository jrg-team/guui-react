import * as React from 'react';
import {Input} from '../lib/index';
import {useState} from 'react';
import Icon from '../lib/icon/icon';

export default function (props: any) {
  const [value, setValue] = useState('文本输入框');
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };
  const onError = () => {
  };
  return (
    <div className="InputExample">
      <h2>普通输入框</h2>
      <div style={{padding: '8px 0'}}>
        <Input length={10} maxLength={20} value={value} onChange={onChange} onEnter={onError}/>
        <Input length={20} placeholder="placeholder"/>
        <Input length={6} type="password" placeholder="密码"/>
        <Input length={10} disabled={true} value={value}/>
      </div>
      <h2>before & after</h2>

      <div style={{padding: '8px 0'}}>
        <div style={{padding: '8px 0'}}>
          <Input size="big" before={'https://'} after={'.com'}/>
          <Input size="big" before={<Icon name="alipay"/>} after={'元'}/>
        </div>
        <div style={{padding: '8px 0'}}>
          <Input before={'https://'} after={'.com'}/>
          <Input before={<Icon name="alipay"/>} after={'元'}/>
        </div>
        <div style={{padding: '8px 0'}}>
          <Input size="small" before={'https://'} after={'.com'}/>
          <Input size="small" before={<Icon name="alipay"/>} after={'元'}/>
        </div>
      </div>
      <h2>带 label 的输入框</h2>
      <div style={{padding: '8px 0'}}>
        <div><Input value={value} onChange={onChange} label="姓名"/></div>
        <div><Input value={value} onChange={onChange} label="姓名" labelPosition="top"/></div>
      </div>
      <h2>带 error 的输入框</h2>
      <div style={{padding: '8px 0'}}>
        <div><Input value={value} onChange={onChange} label="姓名" error="错误提示"/></div>
        <div>
          <Input value={value} onChange={onChange} label="姓名" labelPosition="top" error="错误提示" errorPosition="bottom"/>
        </div>
      </div>
      <h2>可大可小</h2>
      <div style={{padding: '8px 0'}}>
        <Input size="big"/>
        <Input/>
        <Input size="small" length={5}/>
      </div>
      <h2>各种 type</h2>
      <div style={{padding: '8px 0'}}>
        <div><Input type="date" placeholder="date"/></div>
        <div><Input type="datetime" placeholder="datetime"/></div>
        <div><Input type="datetime-local" placeholder="datetime-local"/></div>
        <div><Input type="email" placeholder="email"/></div>
        <div><Input type="number" placeholder="number"/></div>
        <div><Input type="password" placeholder="password"/></div>
        <div><Input type="search" placeholder="search"/></div>
        <div><Input type="tel" placeholder="tel"/></div>
        <div><Input type="text" placeholder="text"/></div>
        <div><Input type="time" placeholder="time"/></div>
        <div><Input type="url" placeholder="url"/></div>
      </div>
    </div>
  );
}
