import React , { useRef,useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Registration () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordType, setPasswordType] = useState("password");
  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate();

  const formSubmit = (data) => {
    //alert("Registration successful")
   // toast("Wow so easy!");
    navigate('/bloglist')
  };
 // const notify = () => toast("Wow so easy!");
 const togglePassword = () => {
  if (passwordType === "password") {
      setPasswordType("text")
      return;
  }
  setPasswordType("password")
}

  return (
    <div className="container my-5">
     
      <div className="row mt-4">
        <div className="col-xl-6 col-lg-6 col-12 m-auto login-container-up">
        <div className="login-container-down"><br />
          <form
            method="POST"
            onSubmit={handleSubmit(formSubmit)}
            autoComplete="off"
          >
           
              
            <h3 className="text-center text-dark font-weight-bold">Registration</h3>
             

              <div className="container text-center">
                <div className="form-group my-3">
                 
                  <input
                    type="text"
                    name="firstname"
                    className={`form-control form--input ${
                      errors.firstname ? "is-invalid" : ""
                    }`}
                    placeholder="First Name"
                    {...register("firstname", {
                      required: "First Name is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "First Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "First Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "First Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="error-text">
                    {errors?.firstname?.message}
                  </div>
                </div>

                <div className="form-group my-3">
                 
                  <input
                    type="text"
                    name="lastname"
                    className={`form-control form--input ${
                      errors.lastname ? "is-invalid" : ""
                    }`}
                    placeholder="Last Name"
                    {...register("lastname", {
                      required: "Last Name is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Last Name must be a valid string",
                      },
                      minLength: {
                        value: 3,
                        message: "Last Name should be greater than 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Last Name shouldn't be greater than 20 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback error-text">
                    {errors?.lastname?.message}
                  </div>
                </div>

                <div className="form-group my-3">
                 
                  <input
                    type="text"
                    name="email"
                    className={`form-control form--input ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                        message: "Email must be a valid email address",
                      },
                    })}
                  />
                  <div className="invalid-feedback error-text">
                    {errors?.email?.message}
                  </div>
                </div>

                <div className="form-group my-3">
                 
                  <input
                    type={passwordType} 
                    name="password"
                    className={`form-control form--input ${
                      errors.password ? "is-invalid" : ""
                    } `}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^[a-zA-Z]+[0-9]+$/,
                        message: "Password must be alpha numeric",
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be atleast 8 characters",
                      },
                    })}
                  />
                   <button className="showhidebtn" onClick={togglePassword}>
                        {passwordType === "password" ? <i className="fa fa-eye-slash"></i> :<i className="fa fa-eye"></i>}
                  </button>
                  <div className="invalid-feedback error-text">
                    {errors?.password?.message}
                  </div>
                </div>

                <div className="form-group my-3">
                
                  <input
                  type="password"
                    name="confirm"
                    className={`form-control form--input ${
                      errors.confirm ? "is-invalid" : ""
                    }`}
                    placeholder="Confirm Password"
                    {...register("confirm", {
                      required: "confirm password is required",
                      validate: value =>
                      value === password.current || "The passwords do not match"
                    })}
                  />
                 
                  <span className="invalid-feedback error-text">
                    {errors?.confirm?.message}
                  </span>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-success"> Save </button>
                  {/* <button onClick={notify}>Notify!</button>
                  <ToastContainer /> */}
                </div>
              </div>
            
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};