import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from './component'

function importAll(requireContext: any) {
  requireContext.keys().forEach(requireContext);
}

if (require.context) {
  importAll(require.context('../icons/', true, /\.svg$/ as RegExp));
}

interface IProps {
  name: string;
}

class Icon extends Component<IProps, {}> {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <svg className={this.sc(this.props.name)}>
        <use xlinkHref={`#${this.props.name}`}/>
      </svg>
    )
  }
}

export default Icon
