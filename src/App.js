import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import { AddUser } from './Components/AddUser';
import { EditUsr } from './Components/EditUsr';

function App() {
  return (
    <div className="App">
      <h>React Crud</h>
      <Home/>
      <AddUser />
      <EditUsr />
    </div>
  );
}

export default App;
