import * as React from 'react';

class Button extends React.Component {
  public xxx() {
    // tslint:disable-next-line:no-console
    console.log('hi');
  }
  public render() {
    const a = 1;
    const b = 2;
    if (a > b) {
      return (
        <div className="App">
          <button> Hi 4 </button>
        </div>
      );
    } else {
      return (
        <div className="App2">
          <button> Hi 4 </button>
        </div>
      );
    }
  }
}

export default Button;
