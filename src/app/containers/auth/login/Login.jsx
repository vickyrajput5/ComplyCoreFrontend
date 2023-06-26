import React, { useState } from "react";
import Passwordimg from "../../../assets/password.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { RiErrorWarningLine } from "react-icons/ri";
import { useFormik } from "formik";
import { LoginScehma } from "../../../validation/login";
import show_Toast from "../../../helpers/toast.helper";
import { LoginUser } from "../../../services/index";
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setUser } from "../../../store/slices/login";
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: LoginScehma,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const response = await LoginUser(values);
        if (response?.data?.status === "success") {
          navigate("/");
          dispatch(setUser(response?.data?.result));
          // dispatch(setIsAuthenticated(true));
          localStorage.setItem("accessToken", response?.data?.token);
        }
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
        resetForm();
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.response?.data?.message || "Something went wrong",
        });
      } finally {
        setSubmitting(false);
      }
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
            <h1>Login</h1>
          </div>
          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo">
                  <img src={Passwordimg} alt="" />
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
                    {errors.email && touched.email ? (
                      <div>
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.email}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="input-f">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className={
                        errors.password && touched.password
                          ? "inputError"
                          : null
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div>
                        {" "}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.password}</p>{" "}
                      </div>
                    ) : (
                      <span onClick={handleTogglePassword}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </span>
                    )}
                  </div>
                  <div className="forgetpassword">
                    <Link to="/forget">Forgot Password?</Link>
                  </div>
                  <div className="log-btn">
                    <button type="submit" disabled={isSubmitting}>
                      Login
                    </button>
                  </div>
                  <div className="dont-account">
                    <Link to="/register">
                      Don’t have an account yet? <span>Register</span>
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

export default Login;
