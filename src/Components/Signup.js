import React, {useState} from 'react'
import "./Signup.css"
import logo from './Images/login-logo.svg'
import validator from 'validator'

const Signup = () => {
    const[phoneNumber, setPhoneNumber] = useState("");
    const[fullName, setFullName] = useState("");
    const[emailAddress, setEmailAddress] = useState("");
    const[passWord, setPassWord] = useState("");

    const[phoneNumberErr, setPhoneNumberErr] = useState({});
    const[fullNameErr, setFullNameErr] = useState({});
    const[emailAddressErr, setEmailAddressErr] = useState({});
    const[passWordErr, setPassWordErr] = useState({});

    const onSubmit =(e)=>{
        e.preventDefault();
        const isValid = formValidation();
    }
    const formValidation = () =>{
        const phoneNumberErr = {};
        const fullNameErr = {};
        const emailAddressErr = {};
        const passWordErr = {};
        let isValid = true;

        if(phoneNumber.trim().length < 10 || phoneNumber.trim().length > 10){
            phoneNumberErr.phoneNumberShort = "*invalid number*"
            isValid = false;
        }
        if(fullName.trim().length < 3){
            fullNameErr.fullNameShort = "*name length is too short*"
            isValid = false;
        }
        if(fullName.trim().length > 20){
            fullNameErr.fullNameLong = "*name length is too long*"
            isValid = false;
        }
        if(passWord.trim().length < 5 || passWord.trim().length > 16){
            passWordErr.passWordShortOrLong = "*password range(6-16)characters*"
            isValid = false;
        }
        if(!validator.isEmail(emailAddress)) {
            emailAddressErr.emailAddressWrong = "*invalid email*"
            isValid = false;
        }


        setPhoneNumberErr(phoneNumberErr);
        setFullNameErr(fullNameErr);
        setEmailAddressErr(emailAddressErr);
        setPassWordErr(passWordErr);
        return isValid;

    }
    return (
        <>
        <div class="limiter">
                <div class="container-login10">
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
                            <div class="wrap-input100 validate-input">
                                <input 
                                    class="input100" 
                                    type="number" 
                                    value={phoneNumber}
                                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                    placeholder="Phone number" 
                                />
                                {Object.keys(phoneNumberErr).map((key)=>{
                                    return <div style={{color:"red"}}>{phoneNumberErr[key]}</div>
                                })}
                            </div>
                            <div class="wrap-input100 validate-input">
                                <input 
                                    class="input100" 
                                    type="text" 
                                    value={fullName} 
                                    onChange={(e)=>{setFullName(e.target.value)}}
                                    placeholder="Full name" 
                                />
                                {Object.keys(fullNameErr).map((key)=>{
                                    return <div style={{color:"red"}}>{fullNameErr[key]}</div>
                                })}
                            </div>
                            <div class="wrap-input100 validate-input">
                                <input   
                                    class="input100" 
                                    type="text" 
                                    value={emailAddress} 
                                    onChange={(e)=>{setEmailAddress(e.target.value)}}
                                    placeholder="Email" 
                                />
                                {Object.keys(emailAddressErr).map((key)=>{
                                    return <div style={{color:"red"}}>{emailAddressErr[key]}</div>
                                })}
                            </div>
                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <input 
                                    class="input100" 
                                    type="password" 
                                    value={passWord}
                                    onChange={(e)=>{setPassWord(e.target.value)}}
                                    placeholder="Password" 
                                />
                                {Object.keys(passWordErr).map((key)=>{
                                    return <div style={{color:"red"}}>{passWordErr[key]}</div>
                                })}
                            </div>
                            <div class="container-login10-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button type="submit" class="login100-form-btn">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <div class="text-center mt-2">
                                
                                <span class="txt1">
                                    Already have an account?
                                </span>
                                <a class="txt2 ms-1" href="/login">
                                    Sign In
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
export  default Signup;
