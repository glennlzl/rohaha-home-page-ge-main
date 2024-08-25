import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a href="/">
            <span>洛哈纳</span>
          </a>
        </h1>
      </div>
    </header>
  );
}
