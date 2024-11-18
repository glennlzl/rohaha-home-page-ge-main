import React, { useState, useEffect } from 'react';

export default function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem('phoneNumber') || ''
  );

  useEffect(() => {
    const handleLoginEvent = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      setPhoneNumber(localStorage.getItem('phoneNumber') || '');
    };

    // 监听自定义的 'login' 事件
    window.addEventListener('login', handleLoginEvent);

    // 在组件卸载时，移除监听器
    return () => {
      window.removeEventListener('login', handleLoginEvent);
    };
  }, []);

  console.log('11111');

  return (
    <header {...props}>
      <div
        className="header-content"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>
          <a href="/">
            <span>洛哈纳</span>
          </a>
        </h1>
        <div style={{ color: '#000' }}>
          {isLoggedIn ? (
            <span>你好，{phoneNumber}</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </header>
  );
}
