import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import './App.css'

const HatsPage = () => 
<h1> Hats Page</h1>

function App() {

  return (
    <div>
   
      <Route  exact path="/" component={Homepage}></Route>
      <Route  path="/hats" component={HatsPage}></Route>
    
   
    </div>
  );
 
}

export default App;
