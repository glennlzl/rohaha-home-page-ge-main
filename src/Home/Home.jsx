import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header key="header" />
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page2 key="page2" />
        <Page3 key="page3" style={{ margin: '0 auto', padding: '20px 0' }} />
        <Footer key="footer" />
        <DocumentTitle title="上海洛哈纳网络科技有限公司" />
      </div>
    );
  }
}

export default Home;
