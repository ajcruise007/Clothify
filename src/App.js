import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import ShopPage from './pages/shop/shop.component';



function App() {

  return (
    <div>
   
      <Route  exact path="/" component={Homepage}></Route>
      <Route  path="/shop" component={ShopPage}></Route>
    
   
    </div>
  );
 
}

export default App;
