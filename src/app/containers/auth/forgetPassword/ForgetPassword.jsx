import React from "react";
import Passwordimg from "../../../assets/forgot-password.png";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { RiErrorWarningLine  } from "react-icons/ri";
import { useFormik } from "formik";
import { LoginScehma } from "../../../validation/login";

const initialValues = {
  email: "",
  password: "",
};
const ForgetPassword = () => {
 

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginScehma,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Forget Password</h1>
          </div>
          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo">
                  <img src={Passwordimg} className="forgetimg" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="username@gmail.com"
                      className={
                        errors.email && touched.email ? "inputError" : null
                      }
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                         {errors.email && touched.email ?  
                                (<div> 
                                  <span> <RiErrorWarningLine className='warning'/>  </span>  
                                  <p className='form-errors'>{errors.email}</p> 
                                </div> )
                              : 
                              null} 
                  </div>
                 
                  <div className="log-btn">
                    <button>Submit</button>
                  </div>
                  <div className="dont-account">
                    <Link to="/login">
                       <span><AiOutlineLeft/> Return to Login</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgetPassword;
