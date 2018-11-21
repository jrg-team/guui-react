import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from '../component'
import IUploadFile from './IUploadFile';
import {ChangeEvent} from 'react';
import Http from '../http';

interface IState {
  x: string
}

interface IFile {
  url: string
}

export interface IProps {
  accept?: string;
  url: string;
  method: 'POST' | 'PUT' | 'PATCH';
  multiple?: boolean;
  name: string;
  fileSizeLimit?: number;
  fileLengthLimit?: number;
  disabled?: boolean;
  responseParser: (responseText: string) => string;
  fileList: IUploadFile[],
  onUploaded: (error: Error | null, file?: IFile) => void,
}

export default class Uploader extends Component<IProps, IState> {
  static propTypes = {
    accept: PropTypes.string,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    method: PropTypes.string.isRequired,
    fileSizeLimit: PropTypes.number,
    fileLengthLimit: PropTypes.number,
    disabled: PropTypes.bool,
    responseParser: PropTypes.func.isRequired,
    fileList: PropTypes.array.isRequired
  };

  public static defaultProps: Partial<IProps> = {
    multiple: false,
    disabled: false
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const files = Array.from(e.target.files!)
    files.map((file) => {
      formData.append(this.props.name, file)
    })
    const promise = Http.ajax({
      method: this.props.method,
      data: formData,
      url: this.props.url
    })
    promise.then((xhr: XMLHttpRequest) => {
      const url = this.props.responseParser(xhr.responseText)
      this.props.onUploaded(null, {url})
    }, (xhr) => {
      this.props.onUploaded(new Error())
      console.log('error');
    })

  }

  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className={this.sc('wrapper')}>
        <input type="file" accept={this.props.accept} onChange={this.onChange}/>
      </div>
    );
  }
}
