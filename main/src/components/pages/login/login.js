import React from "react";
import './components/login.css';
import logo from '../../../logo.svg'
import login from './components/images/login.svg'

function Login() {
  return (
    <div className="container d-flex">
      <div className="d-flex flex-column mb-3 login-welcome">
        <div className="p-2 d-flex justify-content-center">
          <div className="p-2">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top mx-2"
              alt="GharBhada logo"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <h1>Welcome Back</h1>
        </div>
        <div className="text-muted text-center">
              <p>Sign in to access your rental property account and continue your search
              for the perfect home.</p>
        </div>
        <div className="d-flex mt-5 flex-column">
              <h3>Why choose GharBhada?</h3>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="GharBhada logo"
                  />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Find Properties with advanced filters and location-based search
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="GharBhada logo"
                  />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Find Properties with advanced filters and location-based search
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="GharBhada logo"
                  />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Find Properties with advanced filters and location-based search
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="GharBhada logo"
                  />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Find Properties with advanced filters and location-based search
                  </p>
                </div>
              </div>
        </div>
      </div>

      <div className="col-6 login d-flex flex-column mx-5 my-5">
        <div className="d-flex justify-content-center">
          <img
            src={login}
            width="70"
            height="70"
            className="d-inline-block align-top mx-2"
            alt="GharBhada logo"
          />
        </div>
        <div className="d-flex justify-content-center">
          <h2>Welcome Back</h2>
        </div>
        <div className="d-flex justify-content-center ">
          <p className="form-description text-muted">
            Sign in to your GharBhada account
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
