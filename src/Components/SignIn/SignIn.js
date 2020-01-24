import React, { Component } from "react";
import FormInput from '../FormInput/FormInput';
import '../../styles/sign-in.scss'
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/utility/firebase';
export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign-In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
            type="email"
            label='email'
          />

          <FormInput
            handleChange={this.handleChange}
            label='password'
            name="password"
            type="password"
            required
            value={this.state.password}
          />
<div className="button">
<CustomButton type="submit" >Sign In </CustomButton>
<CustomButton isGoogleSignIn onClick={signInWithGoogle}  >Sign In with Google </CustomButton>
</div>
        </form>
      </div>
    );
  }
}
