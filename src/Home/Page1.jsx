/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Modal } from 'antd';
import { page1 } from './data';

export default function Page1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const showModal = (d) => {
    setModalContent(d.modalContent); // 使用 modalContent 设置Modal内容
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const children = page1.map((d, i) => (
    <QueueAnim
      component={Col}
      key={i}
      type="bottom"
      className="home-case"
      componentProps={{ span: 8 }}
      onClick={() => showModal(d)} // 添加点击事件
    >
      <div key="image" className="image" style={{ backgroundImage: `url(${d.src})` }} />
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));

  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func">
      <h2>公司介绍</h2>
      <i className="line" />
      <OverPack className="home-layout" location="home-func" playScale={0.4} always={false}>
        <QueueAnim className="home-func" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>

      {/* Modal部分 */}
      <Modal
        title={modalContent.title}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // 隐藏默认按钮
      >
        <div style={{ padding: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
            {modalContent.content}
          </p>
        </div>
      </Modal>
    </div>
  );
}

