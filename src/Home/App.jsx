import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CasePage from './CasePage'; // 新建的页面组件

function App() {
  console.log(Home); // 应该是一个函数或类组件，而不是 `undefined` 或其他类型

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/case/:id" component={CasePage} /> 动态路由
      </Switch>
    </Router>
  );
}

export default App;