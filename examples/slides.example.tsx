import * as React from 'react';
import {Slides} from '../lib/index';
import {useState} from 'react';
import './slides.example.scss';

export default function (props: any) {
  const [current, setCurrent] = useState(2);
  return (
    <div className="SlidesExample">
      <h2>受控组件</h2>
      <div>
        <Slides className="sildes-demo" current={current} beforeChange={(value) => setCurrent(value)}>
          <div className="card"><h3>1</h3></div>
          <div className="card"><h3>2</h3></div>
          <div className="card"><h3>3</h3></div>
          <div className="card"><h3>4</h3></div>
        </Slides>
      </div>
      <h2>非受控组件</h2>
      <div>
        <Slides className="sildes-demo" defaultCurrent={1}>
          <div className="card"><h3>1</h3></div>
          <div className="card"><h3>2</h3></div>
          <div className="card"><h3>3</h3></div>
          <div className="card"><h3>4</h3></div>
        </Slides>
      </div>
      <h2>自动播放</h2>
      <div>
        <Slides className="sildes-demo" defaultCurrent={1} autoplay={true}>
          <div className="card"><h3>1</h3></div>
          <div className="card"><h3>2</h3></div>
          <div className="card"><h3>3</h3></div>
          <div className="card"><h3>4</h3></div>
        </Slides>
      </div>
      <h2>不展示导航条</h2>
      <div>
        <Slides className="sildes-demo" defaultCurrent={1} autoplay={true} navVisible={false}>
          <div className="card"><h3>1</h3></div>
          <div className="card"><h3>2</h3></div>
          <div className="card"><h3>3</h3></div>
          <div className="card"><h3>4</h3></div>
        </Slides>
      </div>
    </div>
  );
}
