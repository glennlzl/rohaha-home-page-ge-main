import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CasePage from './CasePage'; // 新建的页面组件

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/case/:id" >
          <CasePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
