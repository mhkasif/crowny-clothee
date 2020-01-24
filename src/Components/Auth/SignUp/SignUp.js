import React, { Component } from "react";
import FormInput from "../../FormInput/FormInput";
import CustomButton from "../../CustomButton/CustomButton";
import {
  auth,
  createUserProfileDocument
} from "../../../firebase/utility/firebase";
import '../../../styles/sign-up-styles.scss'
export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleSubmit = async e => {
    const { displayName, password, confirmPassword, email } = this.state;

    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            required
            value={displayName}
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            label="Email"
            required
            value={email}
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            label="Password"
            required
            value={password}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            required
            value={confirmPassword}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
