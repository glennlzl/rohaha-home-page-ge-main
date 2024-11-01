import React from 'react';
import { useLocation } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === '#page2') {
      const element = document.getElementById('page2');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#page3') {
      const element = document.getElementById('page3');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-page">
      <Header key="header" />
      <Banner key="banner" />
      <Page1 key="page1" />
      <Page2 key="page2" id="page2" />
      <Page3 key="page3" id="page3" style={{ margin: '0 auto', padding: '20px 0' }} />
      <Footer key="footer" />
      <DocumentTitle title="上海洛哈纳网络科技有限公司" />
    </div>
  );
};

export default Home;
