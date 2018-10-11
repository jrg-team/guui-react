import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button as GuButton } from './lib';

// tslint:disable-next-line:no-console
console.log('HI');

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<GuButton />, div);
