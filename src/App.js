import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <h2>Nav Bar</h2>
          <switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit:id" component={EditUser} />
        </switch>
    
      </Router>
    </div>
  );
}

export default App;
