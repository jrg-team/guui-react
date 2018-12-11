import * as React from 'react';
import {Row, Col} from '../lib/grid/index';
import './grid.example.scss';

export default function (props: any) {
  return (
    <div className="GridExample">
      <h1>网格组件</h1>
      <h2>无间隙</h2>
      <div className="noGutter">
        <Row>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
        <Row>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
        </Row>
        <Row>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
        </Row>
        <Row>
          <Col className="col" span={6}/> <Col className="col" span={6}/>
          <Col className="col" span={6}/> <Col className="col" span={6}/>
        </Row>
        <Row>
          <Col className="col" span={8}/> <Col className="col" span={8}/>
          <Col className="col" span={8}/>
        </Row>
        <Row>
          <Col className="col" span={12}/> <Col className="col" span={12}/>
        </Row>
        <Row>
          <Col className="col" span={24}/>
        </Row>
      </div>
      <h2>有间隙</h2>
      <div className="hasGutter">
        <Row gutter={16}>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
          <Col className="col" span={3}/> <Col className="col" span={3}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
          <Col className="col" span={4}/> <Col className="col" span={4}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={6}/> <Col className="col" span={6}/>
          <Col className="col" span={6}/> <Col className="col" span={6}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={8}/> <Col className="col" span={8}/>
          <Col className="col" span={8}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={12}/> <Col className="col" span={12}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={24}/>
        </Row>
      </div>
      <h2>有位移</h2>
      <div className="hasGutter">
        <Row gutter={16}>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2}/>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2} offset={2}/>
        </Row>
        <Row gutter={16}>
          <Col className="col" span={8}/>
          <Col className="col" span={8} offset={8}/>
        </Row>
      </div>
      <h2>右对齐</h2>
      <div className="hasGutter">
        <Row align="right" gutter={16}>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
        <Row align="right" gutter={16}>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
      </div>
      <h2>居中对齐</h2>
      <div className="hasGutter">
        <Row align="center" gutter={16}>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
        <Row align="center" gutter={16}>
          <Col className="col" span={2} offset={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
      </div>
      <h2>Space Between</h2>
      <div className="noGutter">
        <Row align="spaceBetween">
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
      </div>
      <h2>Space Around</h2>
      <div className="noGutter">
        <Row align="spaceAround">
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
          <Col className="col" span={2}/> <Col className="col" span={2}/>
        </Row>
      </div>
      <h2>垂直居中</h2>
      <div className="noGutter">
        <Row verticalAlign="center" gutter={16}>
          <Col className="col" span={12}/> <Col className="col" span={12} style={{height: 100}}/>
        </Row>
      </div>
      <h2>底部对齐</h2>
      <div className="noGutter">
        <Row verticalAlign="bottom" gutter={16}>
          <Col className="col" span={12}/> <Col className="col" span={12} style={{height: 100}}/>
        </Row>
      </div>
    </div>
  );
}
