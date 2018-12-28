import * as React from 'react';
import * as PropTypes from 'prop-types';
import {HTMLAttributes} from 'react';
import {RefObject} from 'react';

const componentName = 'ClickOutside';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  handler: (e: React.MouseEvent) => void;
};

class ClickOutside extends React.PureComponent<IProps> {
  static displayName = componentName;
  static propTypes = {
    handler: PropTypes.func.isRequired
  };
  private readonly myRef: RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  handler = (e: MouseEvent | TouchEvent) => {
    if (this.myRef.current === null) {return;}
    if (!this.myRef.current.contains(e.target as Node)) {
      this.props.handler.call(e.target, e);
    }
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handler);
  }

  render() {
    const {handler, children, ...restProps} = this.props;
    return (
      <div style={{border: '1px solid red'}} ref={this.myRef} {...restProps}>{children}</div>
    );
  }
};
export default ClickOutside;
