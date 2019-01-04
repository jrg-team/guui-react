import * as React from 'react';
import {lowerFirstLetter} from 'utils/namer';

export function scopedClasses(this: any, ...args: ClassValue[]): string {
  const prefix = ['gu', lowerFirstLetter(this.constructor.name)];
  if (args.length === 0) {
    return prefix.join('-');
  }
  return args.map((c: ClassValue) => {
    const result = [];
    if (!c) {
      return prefix.join('-');
    } else if (typeof c === 'string') {
      result.push(c);
    } else if (Array.isArray(c)) {
      result.push(...c);
    } else {
      for (const key in c) {
        if (c[key]) {
          result.push(key);
        }
      }
    }
    return result.map(k => [...prefix, k].join('-')).join(' ');
  }).join(' ');
}

export function classes(this: any, ...args: ClassValue[]): string {
  return args.map((c: ClassValue) => {
    const result = [];
    if (!c) { return ''; }
    if (typeof c === 'string') {
      result.push(c);
    } else if (Array.isArray(c)) {
      result.push(...c);
    } else {
      result.push(...Object.keys(c).filter(k => c[k]));
    }
    return result.join(' ');
  }).join(' ');
}

export default class Component<P, S> extends React.Component<P, S> {
  scopedClasses = scopedClasses;
  sc = this.scopedClasses;
  classes = classes;
  c = this.classes;
}
