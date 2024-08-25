import React from 'react';
import { footer } from './data';

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src="/images/logo_without_background.png" width="250" height="200" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <iv className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright ©2024 上海洛哈纳网络科技有限公司 |  <a href="https://beian.miit.gov.cn/" target="_blank">ICP证：沪ICP备2024073122号</a></p>
      </iv>
    </div>
  );
}

export default Footer;
