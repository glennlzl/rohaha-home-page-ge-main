import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { page3 } from './data';

export default function Page3() {
  const children = page3.map((d, i) => (
    <Col span={8} className="col" key={i.toString()}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <div key="image" className="image">
          {d.svg}
        </div>
        <h3 key="h3">{d.title}</h3>
        {d.content.map((content, index) => (
          <div key={index} style={{ textAlign: 'left' }}>
            {content}
          </div>
        ))}
        {d.exp && (
          <div className="exp" key="exp" style={{ textAlign: 'left' }}>
            {d.exp}
          </div>
        )}
      </QueueAnim>
    </Col>
  ));
  return (
    <div className="home-layout-wrapper home-serve-wrapper" id="home-func">
      <div className="home-layout">
        <QueueAnim
          className="home-serve"
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
          appear={false} // 禁用初次加载动画
        >
          <h2 key="h2">公司业务</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 96 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </div>
    </div>
  );
}
