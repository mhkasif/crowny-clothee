import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../src/assets/logo/crown.svg";
import "../../styles/header.scss";
import { auth } from "../../firebase/utility/firebase";
export default class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <Link className="option" to='/signin'>Sign In</Link>
          )}

        </div>
      </div>
    );
  }
}
