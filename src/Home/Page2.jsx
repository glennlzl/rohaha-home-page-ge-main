import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { page2 } from './data';

export default function Page2(props) {
  const children = page2.map((d, i) => (
    <Col key={i} className="col" span={6}>
      <Link to={`/case/${d.id}`}>
        <div className="content-wrapper home-hover">
          <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
        </div>
        <div className="image-title" style={{ textAlign: 'center', marginTop: '16px', fontWeight: 'bold', color: 'black' }}>
          {d.title}
        </div>
      </Link>
    </Col>
  ));

  return (
    <div id={props.id} className="home-layout-wrapper home-case-wrapper">
      <div className="home-layout">
        <QueueAnim
          className="home-case"
          type="bottom"
          key="home-case"
          ease="easeOutQuart"
          leaveReverse
          appear={false} // 禁用初始加载动画
        >
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
      </div>
    </div>
  );
}
