import React, { useState } from "react";
import Webiste from "../../../assets/website.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useFormik } from "formik";
import { RegistrationScehma } from "../../../validation/registration";
import { RiErrorWarningLine } from "react-icons/ri";
import show_Toast from "../../../helpers/toast.helper";
import { RegisterUser } from "../../../services/index";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
    validationSchema: RegistrationScehma,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const response = await RegisterUser(values);
        if (response?.data?.status === "success") {
          navigate("/login");
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
            <h1>Register</h1>
          </div>

          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo register-logo">
                  <img src={Webiste} alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-f">
                    <label htmlFor="name">Name</label>
                    <input
                      className={
                        errors.name && touched.name ? "inputError" : null
                      }
                      type="text"
                      name="name"
                      id="name"
                      placeholder="johan"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.name && touched.name ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.name}</p>{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={
                        errors.email && touched.email ? "inputError" : null
                      }
                      name="email"
                      id="email"
                      placeholder="username@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.email}</p>{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-f">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={
                        errors.password && touched.password
                          ? "inputError"
                          : null
                      }
                      name="password"
                      id="password"
                      placeholder="Password"
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

                    {/* {errors.password && touched.password ? ( ) : null} */}
                  </div>
                  <div className="input-f">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "inputError"
                          : null
                      }
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div>
                        {" "}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.confirmPassword}</p>{" "}
                      </div>
                    ) : (
                      <span onClick={handleToggleConfirmPassword}>
                        {showConfirmPassword ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="input-f">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className={
                        errors.phone && touched.phone ? "inputError" : null
                      }
                      id="phone"
                      placeholder="123 - 4567- 34"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.phone}</p>{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="log-btn sign-up">
                    <button type="submit" disabled={isSubmitting}>
                      Sign Up
                    </button>
                  </div>
                  <div className="dont-account have-account">
                    <Link to="/login">
                      Already a user?<span> Login</span>
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

export default Register;
