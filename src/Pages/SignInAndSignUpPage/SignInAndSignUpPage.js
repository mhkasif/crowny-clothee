import React from 'react';
import SignIn from '../../Components/Auth/SignIn/SignIn';
import SignUp from '../../Components/Auth/SignUp/SignUp';
import '../../styles/sign-in-and-sign-up.scss'
const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
    );
}

export default SignInAndSignUpPage;
