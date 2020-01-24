import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import "./App.css";
import Shop from "./Components/Shop/ShopPage";

import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth } from "./firebase/utility/firebase";

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth=null;
  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user }, () =>
        console.log(this.state.currentUser)
      );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
