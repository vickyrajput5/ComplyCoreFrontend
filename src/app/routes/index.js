import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../component/aboutus/About";
import AppLayout from "../component/app";
import Contact from "../component/contact/Contact";
import Home from "../component/home/Home";
import Ourproject from "../component/ourproject/Ourproject";
import Services from "../component/services/Services";
import ForgetPassword from "../containers/auth/forgetPassword/ForgetPassword";
import Login from "../containers/auth/login/Login";
import Register from "../containers/auth/register/Register";

import { AuthRoute, ProtectedRoute } from "./routes";
const AppRoutes = () => {
  const { isAuthenticated = false } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Login />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Register />
              </AppLayout>
            </AuthRoute>
          }
        />
         <Route
          path="/forget"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <ForgetPassword />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Home />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/project"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Ourproject />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/services"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Services />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Contact />
              </AppLayout>
            </AuthRoute>
          }
        />
        <Route
          path="/about"
          element={
            <AuthRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <About />
              </AppLayout>
            </AuthRoute>
          }
        />

        {/* <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Home />
              </AppLayout>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
