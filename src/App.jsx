import React from 'react';
import Base from './components/Base';
import Inicio from './components/Inicio';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Link to = "/inicio"> Inicio </Link>
    <Link to = "/"> Base </Link>
      <Switch>
        <Route path exact = "/">
          <Base/>
        </Route>
        <Route path = "/inicio">
          <Inicio/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;