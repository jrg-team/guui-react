import * as React from 'react';
import {createScopedClasses} from 'utils/classes';

const componentName = 'Form';
const sc = createScopedClasses(componentName);

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'password';
}

interface IProps extends IStyledProps {
  dataSource: { [K: string]: any };
  fields: FormField[];
}

interface IState {
}

class Form extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={sc()}>TO DO</div>
    );
  }
}

export default Form;
