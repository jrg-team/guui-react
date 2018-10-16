import * as PropTypes from 'prop-types';
import * as React from 'react';

function importAll(requireContext: any) {
  requireContext.keys().forEach(requireContext);
}

importAll(require.context('../icons/', true, /\.svg$/ as RegExp));

interface IProps {
  name: string;
}

const Icon: React.SFC<IProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
