
export default interface IUploadFile {
  id: string;
  size: number;
  type: string;
  name: string;
  url?: string;
  status?: 'error' | 'uploaded' | 'uploading' | 'removed';
  percent?: number;
  originalFile?: File;
  errorMessage?: string;
}