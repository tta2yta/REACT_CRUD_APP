import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"7em auto"}}>
      <GlobalProvider>
      <Router>
          <switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit:id" component={EditUser} />
        </switch>
    
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
