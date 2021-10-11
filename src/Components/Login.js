import React, {useState} from 'react'
import logo from './Images/login-logo.svg'
import validator from 'validator'
import "./Login.css"
const Login = () => {
    const[emailAddress, setEmailAddress] = useState("");
    const [passWord, setPassWord] = useState("");

    const[emailAddressErr, setEmailAddressErr] = useState({});
    const [passWordErr, setPassWordErr] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
    }
    const formValidation = () => {
        const emailAddressErr = {};
        const passWordErr = {};
        let isValid = true;

        if(!validator.isEmail(emailAddress)) {
            emailAddressErr.emailAddressWrong = "*invalid email*"
            isValid = false;
        }
        if(passWord.trim().length < 5 || passWord.trim().length > 16){
            passWordErr.passWordShortOrLong = "*password range(6-16)characters*"
            isValid = false;
        }

        setEmailAddressErr(emailAddressErr);
        setPassWordErr(passWordErr);
        return isValid;

    }
    return (
        <>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form onSubmit={onSubmit} class="login100-form validate-form">
                            <a href="/" class="login100-form-title p-b-26">
                                <img
                                    src={logo}
                                    alt="login"
                                    width="200"
                                    height="100"
                                />
                            </a>
                            <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input
                                    class="input100"
                                    type="text"
                                    value={emailAddress}
                                    onChange={(e) => { setEmailAddress(e.target.value) }}
                                    placeholder="Email"
                                />
                                {Object.keys(emailAddressErr).map((key) => {
                                    return <div style={{ color: "red" }}>{emailAddressErr[key]}</div>
                                })}
                            </div>
                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <input
                                    class="input100"
                                    type="password"
                                    value={passWord}
                                    onChange={(e) => { setPassWord(e.target.value) }}
                                    placeholder="Password"
                                />
                                {Object.keys(passWordErr).map((key) => {
                                    return <div style={{ color: "red" }}>{passWordErr[key]}</div>
                                })}
                            </div>
                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button type="submit" class="login100-form-btn">
                                        Sign In
                                    </button>                 
                                </div>
                            </div>
                            <div class="text-center mt-2">
                                <span class="txt1">
                                    Don’t have an account?
                                </span>
                                <a class="txt2 ms-1" href="/signup">
                                    Create an account.
                                </a> <br />
                                <a class="txt2 ms-1" href="#">
                                    Forgot Password ?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container-fluid footer-body">
                    <div className="col">
                        <p>&copy;{new Date().getFullYear()} | Food Bowl | ALL Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Login;
