import * as React from 'react';
import {lowerFirstLetter} from './namer';

type ClassValue = string | string[] | { [K: string]: boolean }

export function scopedClasses(this: any, ...args: ClassValue[]): string {
  const prefix = ['gu', lowerFirstLetter(this.constructor.name)]
  if (args.length === 0) {
    return prefix.join('-')
  }
  return args.map((c: ClassValue) => {
    const result = []
    if (!c) {
      return prefix.join('-')
    } else if (typeof c === 'string') {
      result.push(c)
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
  }).join(' ');
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
