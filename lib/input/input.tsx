import * as React from 'react';
import PropTypes from 'prop-types';
import classes, {createScopedClasses} from 'utils/classes';
import './input.scss';
import {ReactChild} from 'react';

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
  type?: 'text' | 'number' | 'password' | 'email' | 'date' | 'datetime' | 'datetime-local' | 'search' | 'tel' | 'time' | 'url';
  before?: ReactChild;
  after?: ReactChild;
};

const Input: GFC<IProps> = (props) => {
  const {
    before, after, length, size, className, style, onEnter, label, labelPosition, error, errorPosition, ...restProps
  } = props;
  const width = length ? `calc(${length}em + 18px)` : undefined;
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) { onEnter && onEnter.call(null, e); }
    props.onKeyDown && props.onKeyDown.call(null, e);
  };
  const c1 = {labelLeft: labelPosition === 'left', labelTop: labelPosition === 'top'};
  const c2 = {errorRight: errorPosition === 'right', errorBottom: errorPosition === 'bottom'};
  return (
    <div className={sc('wrapper', c1, {'wrapper-big': size === 'big', 'wrapper-small': size === 'small'})}>
      {label && <label className={sc('label')}>{label}</label>}
      <div className={sc('inputAndError', c2)}>
        <div className={sc('container', {'container-hasAddon': before || after})}>
          {before && <span className={sc('before')}>{before}</span>}
          <input className={classes(sc('', {hasError: error}), className)} style={{width, ...style}}
            {...restProps}
            onKeyDown={onKeyDown}
          />
          {after && <span className={sc('after')}>{after}</span>}
        </div>
        {error && <span className={sc('error')}>{error}</span>}
      </div>
    </div>
  );
};

Input.displayName = componentName;
Input.defaultProps = {
  spellCheck: false,
  type: 'text'
};
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'date', 'datetime', 'datetime-local', 'search',
    'tel', 'time', 'url'])
};
export default Input;
