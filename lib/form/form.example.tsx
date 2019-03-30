import * as React from 'react';
import {Form} from '..';
import {useState} from 'react';
import {FormField} from './form';

export default function (props: any) {
  const [formData] = useState({
    name: 'frank',
    age: 18,
    password: 'xxxxx'
  });
  const [fields] = useState<FormField[]>([
    {name: 'name', label: '姓名', type: 'text'},
    {name: 'age', label: '年龄', type: 'number'},
    {name: 'password', label: '密码', type: 'password'},
  ]);
  return (
    <div className="FormExample">
      <h2>普通示例</h2>
      <div>
        <Form dataSource={formData} fields={fields}/>
      </div>
    </div>
  );
}
