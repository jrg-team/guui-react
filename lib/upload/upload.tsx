import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from '../component'
import IUploadFile from './IUploadFile';

export interface RcFile extends File {
  uid: string;
  lastModifiedDate: Date;
}

interface IState {
  x: string
}

export interface IProps {
  accept?: string;
  url: string | ((file: IUploadFile) => PromiseLike<any>);
  multiple: boolean;
  fileSizeLimit: number;
  fileLengthLimit: number;
  disabled?: boolean;
  responseParser: (response: Response) => string;
  fileList: IUploadFile[]
}

export class Upload extends Component<IProps, IState> {
  static propTypes = {
    icon: PropTypes.string,
  }

  public static defaultProps: Partial<IProps> = {

  };
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <input type="file" accept={this.props.accept} style={{display: 'none'}}/>
    );
  }
}
