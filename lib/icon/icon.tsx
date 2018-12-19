import * as PropTypes from 'prop-types';
import * as React from 'react';
import {createScopedClasses, classes} from 'utils/classes';
import './importAllIcons';
import * as ReactDOM from 'react-dom';
import './index.scss';

const componentName = 'Icon';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
  name: string;
  fill?: string;
  beforeMount?: (el: Element | null | Text) => void
  afterMount?: (el: Element | null | Text) => void
}

class Icon extends React.Component<IProps> {
  static displayName = componentName;
  static defaultProps = {
    fill: 'currentColor'
  };
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
    return (
      <svg className={classes(sc('', this.props.name), this.props.className)} style={this.props.style}>
        <use xlinkHref={`#${this.props.name}`} style={{fill: this.props.fill}}/>
      </svg>
    );
  }
}

export default Icon;
