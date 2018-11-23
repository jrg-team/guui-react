type HttpMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

interface IAjaxOptions {
  method: HttpMethod,
  url: string,
  query?: Map<string, string>,
  headers?: Map<string, string>,
  data: FormData | string
}

class Http {
  static ajax = (options: IAjaxOptions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({responseText: `{"key":"123123123123"}`})
      }, 100)
    })
  }
  static get = (options: IAjaxOptions) => {
    Http.ajax({...options, method: 'GET'})
  }
  static post = (options: IAjaxOptions) => {
    Http.ajax({...options, method: 'POST'})
  }
  static patch = (options: IAjaxOptions) => {
    Http.ajax({...options, method: 'PATCH'})
  }
  static delete = (options: IAjaxOptions) => {
    Http.ajax({...options, method: 'DELETE'})
  }
  static put = (options: IAjaxOptions) => {
    Http.ajax({...options, method: 'PUT'})
  }
}

export default Http