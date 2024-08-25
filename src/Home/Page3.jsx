/* eslint-disable react/jsx-indent */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page3 } from './data';

export default function Page3() {
  const children = page3.map((d, i) => (
    <Col span={8} className="col" key={i.toString()}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
        // onClick={() => { window.location.href = '/intro/price '; }}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }} // 内联样式
      >
        <div key="image" className="image">{d.svg}</div>
        <h3 key="h3">{d.title}</h3>
        {d.content.map((content, index) => (
          <div key={index} style={{ textAlign: 'left' }}>
            {content}
          </div>
        ))}
        {d.exp && <div className="exp" key="exp" style={{ textAlign: 'left' }}>{d.exp}</div>}
        {/* <div
          key="contact"
          style={{ textAlign: 'left', marginTop: 'auto' }} // 使用 marginTop: 'auto' 推动到底部
        >
          业务咨询：business@rohana.com
        </div> */}
      </QueueAnim>
    </Col>
  ));
  return (
    <div className="home-layout-wrapper home-serve-wrapper" id="home-func">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
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
      </OverPack>
    </div>);
}
