import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Root from './Root';
import Admin from './Admin';
import Dashboard from './Dashboard';
import AdminManagement from './AdminManagement';
import UserWelcome from './UserWelcome';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Root} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/userwelcome" exact component={UserWelcome} />
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/management" exact component={AdminManagement} />
        </Switch>

      </Router>
    )
  }
}

export default App;
