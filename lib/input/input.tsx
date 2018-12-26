import * as React from 'react';
import classes, {createScopedClasses} from 'utils/classes';
import './input.scss';

const componentName = 'Input';
const sc = createScopedClasses(componentName);

export interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  label?: string;
  labelPosition?: 'left' | 'top';
  error?: string;
  errorPosition?: 'right' | 'bottom';
  size?: 'big' | 'small';
  length?: number | string;
};

const Input: GFC<IProps> = (props) => {
  const {
    length, size, className, style, onEnter, label, labelPosition, error, errorPosition, ...restProps
  } = props;
  const width = length ? `${length}em` : undefined;
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) { onEnter && onEnter.call(null, e); }
    props.onKeyDown && props.onKeyDown.call(null, e);
  };
  const c1 = {labelLeft: labelPosition === 'left', labelTop: labelPosition === 'top'};
  const c2 = {errorRight: errorPosition === 'right', errorBottom: errorPosition === 'bottom'};
  return (
    <div className={sc('wrapper', c1)}>
      {label && <label className={sc('label')}>{label}</label>}
      <div className={sc('inputAndError', c2)}>
        <input className={classes(sc('', {hasError: error}), className)} style={{width, ...style}}
          {...restProps}
          onKeyDown={onKeyDown}
        />
        {error && <span className={sc('error')}>{error}</span>}
      </div>
    </div>
  );
};

Input.displayName = componentName;
Input.defaultProps = {};
Input.propTypes = {};
export default Input;
