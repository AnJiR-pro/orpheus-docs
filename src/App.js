import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Commands from './components/Commands';
import ErrorMsg from './components/ErrorMsg';

function App() {
  return (
    <Router basename="/orpheus-docs">
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/commands" exact component={Commands} />
          <Route component={ErrorMsg} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
