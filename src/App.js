import React from "react";
import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/HomePage/Homepage';
import "./App.css";
import Shop from './Components/Shop/ShopPage';
import Auth from './Pages/HomePage/Authentication/Auth';



function App() {

  return <Switch>
  <Route exact path='/' component={Homepage} />
  <Route path='/shop' component={Shop} />
  <Route path='/signin' component={Auth} />
  </Switch>
}

export default App;
