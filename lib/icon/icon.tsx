import * as PropTypes from 'prop-types';
import * as React from 'react';
import {createScopedClasses, classes} from 'utils/classes';
import './importAllIcons';
import * as ReactDOM from 'react-dom';
import './icon.scss';

const componentName = 'Icon';
const sc = createScopedClasses(componentName);

interface IProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  fill?: string;
  beforeMount?: (el: Element | null | Text) => void;
  afterMount?: (el: Element | null | Text) => void;
}

class Icon extends React.Component<IProps> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {
    name: PropTypes.string.isRequired,
    fill: PropTypes.string,
  };

  componentWillMount() {
    this.props.beforeMount && this.props.beforeMount(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    this.props.afterMount && this.props.afterMount(ReactDOM.findDOMNode(this));
  }

  render() {
    const {className, style, name, fill, ...rest} = this.props;
    return (
      <span className={classes(sc('wrapper'), className)} style={style} {...rest}>
        <svg className={classes(sc('', name))}
             style={{fill}}>
          <use xlinkHref={`#${name}`}/>
        </svg>
      </span>
    );
  }
}

export default Icon;
