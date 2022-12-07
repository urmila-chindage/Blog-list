import React, { useState, useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'

import './css/login.css'

export default function Registration() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setcpasswordError] = useState(false);
  const [msg, setMsg] = useState("");

  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();


  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const alpha = /^[0-9a-zA-Z]+$/
  //const strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
  const minLengthRegExp = /.{8,}/;

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  function handleFirstname(e) {
    setFirstname(e.target.value);
    if (!firstname || alpha.test(firstname) === false) {
      setFirstnameError("Please enter only alphanumric characters")
    }
    else {
      setFirstnameError("");
      return true
    }
  }

  function handleLastname(e) {
    setLastname(e.target.value);
    if (!lastname || alpha.test(lastname) === false) {
      setLastnameError("Please enter only alphanumric characters")
    }
    else {
      setLastnameError("");
      return true
    }
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

    if (!passwordInput || passwordInput.length <= 8) {
      setPasswordError("Password must be at least 8 chars long")
    }
    else {
      setPasswordError("");
      return true
    }
  }
  function handleCPasswordChange(e) {
    setConfirmPassword(e.target.value);

    if (passwordInput !== confirmPassword) {
      setcpasswordError("Password can not match")
    }
    else {
      setcpasswordError("");
      return true
    }
  }

  const registration = () => {
    if (firstname != "" && lastname != "" && email != "" && passwordInput != "" && confirmPassword != "" && (passwordInput !== confirmPassword)) {
      setMsg("Thank you for Registration " + firstname + " " + lastname);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPasswordInput("")
      setConfirmPassword("")
      navigate('/bloglist')
    }
    else {
      setEmailError("please enter valid email")
      setPasswordError("please enter password")
      setFirstnameError("Please enter first name")
      setLastnameError("Please enter last name")
      setcpasswordError("Please enter confirm password")
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-offset-4 login-container-up">
          <div className="login-container-down"><br />
            <h3 className="text-center text-dark font-weight-bold">Registration</h3>
            <div className="container text-center">
              <div>
                <input
                  type="text"
                  placeholder='First Name'
                  className='form-control form--input'
                  value={firstname}
                  onChange={handleFirstname}
                />
                <span className="error-text">{firstnameError}</span>

                <input
                  type="text"
                  placeholder='Last Name'
                  className='form-control form--input'
                  value={lastname}
                  onChange={handleLastname}
                />
                <span className="error-text">{lastnameError}</span>

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
                 
                  className="form-control form--input"
                  placeholder="Password"
                />
                <button className="showhidebtn" onClick={togglePassword}>
                  {passwordType === "password" ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                </button>

                {/* <span className="error-text">{error}</span> */}
                <span className="error-text">{passwordError}</span>

                <input
                  type="password"
                  onChange={handleCPasswordChange}
                 
                  value={confirmPassword}
                  className="form-control form--input"
                  placeholder="Confirm Password"
                />
                <span className="error-text">{cpasswordError}</span>



                <br /><br />
                <button className='btn btn-success bt-lg login--button' onClick={registration}>Register</button>
                <Link className='btn btn-success bt-lg login--button ml-1' to="/">Back</Link>
                <br /><br />
              </div>
              <p className="text-success p-2 m-2">{msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}