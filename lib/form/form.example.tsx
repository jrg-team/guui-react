import * as React from 'react';
import {Button, Form} from '..';
import {useState, Fragment} from 'react';
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
    {name: 'name', label: '用户名', input: {type: 'text'}},
    {name: 'age', label: '年龄', input: {type: 'number'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const onChange = (value: FormValue) => {
    setFormData(value);
    const errors = validate(value);
    setErrors(errors);
  };
  const [errors, setErrors] = useState<any>({});
  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="FormExample">
      <h2>普通示例</h2>
      <Form value={formData} fields={fields} onChange={onChange} errors={errors}
            onSubmit={onSubmit}
            buttons={
              <Fragment>
                <Button type="submit" level="important">提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
      />
      <h2>普通示例</h2>
      <Form value={formData} fields={fields} onChange={onChange} errors={errors}
            layout="vertical"
            onSubmit={onSubmit}
            buttons={
              <Fragment>
                <Button type="submit" level="important">提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
      />
    </div>
  );
}
