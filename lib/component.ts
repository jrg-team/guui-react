import * as React from 'react';

export default class Component<P, S> extends React.Component<P, S> {
  scopedClass: (c?: string | string[] | { [K: string]: boolean }, ...args: string[]) => string = (c, ...args) => {
    const prefix = ['gu', this.constructor.name]
    if (!c) {
      return prefix.join('-')
    } else if (typeof c === 'string') {
      if (args.length === 0) {
        return [...prefix, c].join('-');
      } else {
        return this.scopedClass([c, ...args])
      }
    } else if (Array.isArray(c)) {
      return c.map(key => [...prefix, key].join('-')).join(' ')
    } else {
      const result = []
      for (const key in c) {
        if (c[key]) {
          result.push([...prefix, key].join('-'))
        }
      }
      return result.join(' ')
    }
  }
}
