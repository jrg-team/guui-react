import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classes';
import {InputHTMLAttributes} from 'react';
import './radio.scss';

const componentName = 'Radio';
const sc = createScopedClasses(componentName);

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultChecked?: boolean;
}

const Radio: GFC<IProps> = (props) => {
  const {className, children, ...restProps} = props;
  return (
    <label className={sc('wrapper')}>
      <span className={classes(sc('', {checked: props.checked}), className)}>
          <input
            {...restProps}
            className={sc('input')}
            type="radio"
          />
      </span>
      <span className={sc('label')}>{children}</span>
    </label>
  );
};
Radio.displayName = componentName;
Radio.defaultProps = {};
Radio.propTypes = {};
export default Radio;
