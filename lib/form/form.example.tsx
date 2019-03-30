import * as React from 'react';
import {Form} from '..';
import {useState} from 'react';
import {FormField, FormValue} from './form';

const validate = (formValue: FormValue) => {
  if (formValue.name.length < 3) {
    return {name: ['太短']};
  } else {
    return {};
  }
};

export default function (props: any) {
  const [formData, setFormData] = useState<FormValue>({
    name: 'frank',
    age: 18,
    password: 'xxxxx'
  });
  const [fields] = useState<FormField[]>([
    {name: 'name', render: {label: '姓名', type: 'text'}},
    {name: 'age', render: {label: '年龄', type: 'number'}},
    {name: 'password', render: {label: '密码', type: 'password'}},
  ]);
  const onChange = (value: FormValue) => {
    setFormData(value);
    const errors = validate(value);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('valid');
    } else {
      console.log('not valid');
    }
  };
  const [errors, setErrors] = useState<any>({});
  return (
    <div className="FormExample">
      <h2>普通示例</h2>
      <div>
        <Form value={formData} fields={fields} onChange={onChange} errors={errors}/>
      </div>
    </div>
  );
}
