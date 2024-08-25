/* eslint-disable react/jsx-indent */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { page2 } from './data';

export default function Page2() {
  const children = page2.map((d, i) => (
    <Col key={i} className="col" span={6}>
      <Link to={`/case/${d.id}`}>
        <div className="content-wrapper home-hover">
          <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
          {/* <div className="code-wrapper"> */}
          {/*   <h4 style={{ textAlign: 'center', marginTop: '150px' }}>点击了解更多</h4> */}
          {/* </div> */}
        </div>
        <div className="image-title" style={{ textAlign: 'center', marginTop: '16px', fontWeight: 'bold', color: 'black' }}>
          {d.title}
        </div>
      </Link>
    </Col>
  ));

  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
          <h2 key="h2" style={{ textAlign: 'center', marginBottom: '40px' }}>精品案例扫一扫</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: [32, 32] }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
