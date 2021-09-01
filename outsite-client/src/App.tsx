import React from 'react';
import Dashboard from './Components/Dashboard';
import Search from './Components/Search';
import Property from './Components/Property';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/search" exact component={Property}></Route>
      </Switch>
    </Router>
  );
}

export default App;
