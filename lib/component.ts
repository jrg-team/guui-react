import * as React from 'react';

export function scopedClasses(this: any, c?: string | string[] | { [K: string]: boolean }, ...args: string[]): string {
  const prefix = ['gu', this.constructor.name]
  const result = []
  if (!c) {
    return prefix.join('-')
  } else if (typeof c === 'string') {
    result.push(c, ...args)
  } else if (Array.isArray(c)) {
    result.push(...c)
  } else {
    for (const key in c) {
      if (c[key]) {
        result.push(key)
      }
    }
  }
  return result.map(k => [...prefix, k].join('-')).join(' ')
}

export function classes(this: any, c?: string | string[] | { [K: string]: boolean }, ...args: string[]): string {
  const result = []
  if (!c) {
    return ''
  } else if (typeof c === 'string') {
    result.push(c, ...args)
  } else if (Array.isArray(c)) {
    result.push(...c)
  } else {
    for (const key in c) {
      if (c[key]) {
        result.push(key)
      }
    }
  }
  return result.join(' ')
}

export default class Component<P, S> extends React.Component<P, S> {
  scopedClasses = scopedClasses
  sc = this.scopedClasses
  classes = classes
  c = this.classes
}
