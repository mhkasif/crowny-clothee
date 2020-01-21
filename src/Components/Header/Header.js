import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../src/assets/logo/crown.svg";
import '../../styles/header.scss'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className='logo-container' to="/">
          <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>

        </div>
      </div>
    );
  }
}
