import * as React from 'react';
import './home.scss';
import ReactMarkdown from 'react-markdown';
import md from './home.md';

export default function (props: any) {
  return (
    <div>
      <ReactMarkdown source={md}></ReactMarkdown>
    </div>
  );
}
