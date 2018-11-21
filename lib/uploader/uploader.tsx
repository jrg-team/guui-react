import * as PropTypes from 'prop-types';
import * as React from 'react';
import Component from '../component'
import IUploadFile from './IUploadFile';

interface IState {
  x: string
}

export interface IProps {
  accept?: string;
  url: string | ((file: IUploadFile) => PromiseLike<any>);
  method?: 'POST' | 'GET';
  multiple?: boolean;
  fileSizeLimit?: number;
  fileLengthLimit?: number;
  disabled?: boolean;
  responseParser?: (response: Response) => string;
  fileList: IUploadFile[]
}

export default class Uploader extends Component<IProps, IState> {
  static propTypes = {
    accept: PropTypes.string,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    multiple: PropTypes.bool,
    method: PropTypes.string,
    fileSizeLimit: PropTypes.number,
    fileLengthLimit: PropTypes.number,
    disabled: PropTypes.bool,
    responseParser: PropTypes.func,
    fileList: PropTypes.array
  };

  public static defaultProps: Partial<IProps> = {
    method: 'POST',
    multiple: false,
    disabled: false
  };

  private inputWrapper: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    this.inputWrapper = React.createRef()
  }

  onClickUpload = () => {
    const input = this.createInput();
    input.addEventListener('change', () => {
      this.updateFile(input.files![0]);
      input.remove()
    });
    input.click()
  };

  updateFile = (rawFile: IUploadFile) => {
    const {name} = rawFile;
    const newName = this.generateName(name);
    this.beforeUploadFile(rawFile, newName);
    const formData = new FormData();
    formData.append(name, rawFile, newName);

  };

  beforeUploadFile = (rawFile: IUploadFile, newName: string, url?: string) => {

  };

  generateName = (name: string): string => {
    while (this.props.fileList.filter(f => f.name === name).length > 0) {
      const dotIndex = name.lastIndexOf('.');
      const nameWithoutExtension = name.substring(0, dotIndex);
      const extension = name.substring(dotIndex);
      name = nameWithoutExtension + '(1)' + extension
    }
    return name
  };

  createInput = (): HTMLInputElement => {
    const input = document.createElement('input');
    input.type = 'file';
    if (this.props.accept) {
      input.accept = this.props.accept
    }
    if (this.props.multiple) {
      input.multiple = this.props.multiple
    }
    input.type = 'file';
    this.inputWrapper!.current!.appendChild(input);
    return input
  };

  render() {
    const {children} = this.props;
    const inputStyle = {
      width: 0,
      height: 0,
      overflow: 'hidden'
    };
    return (
      <div className={this.sc('wrapper')}>
        <div onClick={this.onClickUpload}>{children}</div>

        <div ref={this.inputWrapper} className={this.sc('input-wrapper')} style={inputStyle}></div>
      </div>
    );
  }
}
