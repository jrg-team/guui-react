import * as PropTypes from 'prop-types';
import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import * as A from 'utils/classes';

console.log(createScopedClasses);
console.log(Object.keys(A));

const componentName = 'Icon';
const sc = createScopedClasses(componentName);

function importAll(requireContext: any) {
  requireContext.keys().forEach(requireContext);
}

if (require.context) {
  importAll(require.context('../icons/', true, /\.svg$/ as RegExp));
}

interface IProps {
  name: string;
}

class Icon extends React.Component<IProps, {}> {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <svg className={sc('', this.props.name)}>
        <use xlinkHref={`#${this.props.name}`}/>
      </svg>
    )
  }
}

export default Icon
