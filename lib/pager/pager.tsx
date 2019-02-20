import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import {range} from 'utils/collection';

const componentName = 'Pager';
const sc = createScopedClasses(componentName);

export interface IProps extends IStyledProps {
  current?: number;
  total: number;
  defaultCurrent?: number;
}

class Pager extends React.Component<IProps> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  render() {
    const xxx = range(1, this.props.total).map((item) => {
      return <button key={item}>{item}</button>;
    });
    return (
      <div className={sc()}>
        {xxx}
      </div>
    );
  }
}

export default Pager;
