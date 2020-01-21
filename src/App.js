import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import "./App.css";
import Shop from "./Components/Shop/ShopPage";

import Header from "./Components/Header/Header";
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage/SignInAndSignUpPage';



function App() {
  return (  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignInAndSignUpPage} />

    </Switch>
  </div>)
}

export default App;
