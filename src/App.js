import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import "./App.css";
import Shop from "./Components/Shop/ShopPage";

import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/utility/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userAction";
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './Pages/Checkout/CheckoutPage';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser({ userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                  <SignInAndSignUpPage />
              )
            }
          />
          <Route exact  path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
