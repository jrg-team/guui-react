type HttpMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

interface IAjaxOptions {
  method: HttpMethod;
  url: string;
  query?: Map<string, string>;
  headers?: Map<string, string>;
  data: FormData | string;
}

class Http {
  static ajax = (options: IAjaxOptions) => {
    return new Promise((resolve, reject) => {
      const {url, method} = options;
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onreadystatechange = () => {
        if (xhr.readyState >= 4) {
          if ((xhr.response as Response).status >= 200 && (xhr.response as Response).status < 300) {
            resolve(xhr);
          } else {
            reject(xhr);
          }
        }
      };
      xhr.send(options.data);
    });
  };
  static get = (options: IAjaxOptions) => {
    return Http.ajax({...options, method: 'GET'});
  };
  static post = (options: IAjaxOptions) => {
    return Http.ajax({...options, method: 'POST'});
  };
  static patch = (options: IAjaxOptions) => {
    return Http.ajax({...options, method: 'PATCH'});
  };
  static delete = (options: IAjaxOptions) => {
    return Http.ajax({...options, method: 'DELETE'});
  };
  static put = (options: IAjaxOptions) => {
    return Http.ajax({...options, method: 'PUT'});
  };
}

export default Http;