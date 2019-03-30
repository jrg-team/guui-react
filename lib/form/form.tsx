import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import {Input} from '../index';
import {ReactNode} from 'react';

const componentName = 'Form';
const sc = createScopedClasses(componentName);

interface FormFieldDefaultRender {
  label: string;
  type: 'text' | 'textarea' | 'number' | 'password';
}

export interface FormField {
  name: string;
  render: (() => ReactNode) | FormFieldDefaultRender;
}

export interface FormValue {
  [K: string]: any;
}

export interface FormErrors {
  [K: string]: string;
}

interface IProps extends IStyledProps {
  value: FormValue;
  fields: FormField[];
  errors: FormErrors;
  onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const onInputChange = (name: string, e: any) => {
    props.onChange({...props.value, [name]: e.target.value});
  };
  const fields = props.fields.map((f: FormField) =>
    <div key={f.name}>
      {f.render instanceof Function ?
        f.render() :
        <Input value={props.value[f.name]}
               error={props.errors[f.name]}
               onChange={onInputChange.bind(null, f.name)}/>}
    </div>
  );
  return (
    <div className={sc('wrapper')}>
      <form>
        {fields}
      </form>
    </div>
  );
};

Form.displayName = componentName;
Form.defaultProps = {};
Form.propTypes = {};

export default Form;
