import * as React from 'react';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare global {
  interface FC<P = {}> extends React.FunctionComponent<P> {
    displayName: string
  }
}
