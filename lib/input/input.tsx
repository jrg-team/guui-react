import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import './input.scss';
import {pick} from 'utils/collection';

const componentName = 'Input';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  size?: number,
  maxLength?: number,
  disabled?: boolean,
  value?: string,
  onChange?: React.FormEventHandler
};

const Input: GFC<IProps> = (props) => {
  const width = props.size ? `${props.size}em` : undefined;
  return (
    <div className={sc('wrapper')}>
      <input className={sc('')} type="text" style={{width}}
        {...pick(props, 'disabled', 'maxLength', 'value', 'onChange')}
      />
    </div>
  );
};
Input.displayName = componentName;
Input.defaultProps = {};
Input.propTypes = {};
export default Input;
