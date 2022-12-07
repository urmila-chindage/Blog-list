import React, { useState, useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import user from '../user.json';

import './css/login.css'

export default function Login() {

    const [userData,setUserData] = useState(user);
    const [email, setEmail] = useState("");
   
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [msg, setMsg] = useState("");

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);

    const navigate = useNavigate();

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //const strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    const minLengthRegExp   = /.{8,}/;

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    function emailValidation(e) {
        setEmail(e.target.value);
       

        if (!email || regex.test(email) === false) {
            setEmailError("Please enter valid email")
        }
        else {
            setEmailError("");
            return true
        }
    }
    function handlePasswordChange(e) {
        setPasswordInput(e.target.value);

        if (!passwordInput || passwordInput.length < 8) {
            setPasswordError("Password must be at least 8 chars long")
        }
        else {
            setPasswordError("");
            return true
        }
    }

    const login = () => {
        // if (email != "" && passwordInput != "") {
        //     setMsg("Thank you for Login " + email)
        // }
       userData.map(item=>{
       console.log(item.email,item.password)
       
            if(item.email===email && item.password===passwordInput){
                localStorage.setItem('token-info', JSON.stringify(userData));
                setIsLoggedin(true);
                navigate('/bloglist')
            }
            else{
                setMsg("User is not valid Please enter valid data")
            }
       })
       
       
    }

    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
      };


    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-offset-4 login-container-up">
                    <div className="login-container-down"><br />
                        <h3 className="text-center text-dark font-weight-bold">Login</h3>
                        <div className="container text-center">
                        {!isLoggedin ? (
                            <div>
                           
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className='form-control form--input'
                                    value={email}
                                    onChange={emailValidation}
                                />
                                 <span className="error-text">{emailError}</span>

                                <input  
                                    type={passwordType}     
                                    onChange={handlePasswordChange} 
                                    value={passwordInput} 
                                    name="password" 
                                    className="form-control form--input" 
                                    placeholder="Password" 
                                />
                              
                                    <button className="showhidebtn" onClick={togglePassword}>
                                        {passwordType === "password" ? <i className="fa fa-eye-slash"></i> :<i className="fa fa-eye"></i>}
                                    </button>
                               
                                <span className="error-text">{passwordError}</span>


                                <br /><br />
                                <button className='btn btn-success bt-lg login--button' onClick={login}>Login</button>
                                <br /><br />

                                
                            </div>
                            ) : (
                                <>
                                  <h1>User is logged in</h1>
                                  <button onClickCapture={logout}>logout user</button>
                                </>
                              )}
                            <p className="text-success p-2 m-2">{msg}</p>

                            <p>New user <Link to="/registration">Register here</Link></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}