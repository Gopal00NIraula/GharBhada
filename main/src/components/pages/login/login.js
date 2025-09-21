import React from "react";
import './components/login.css';
import logo from '../../../logo.svg'
import login from './components/images/login.svg'
import loginwhite from './components/images/loginwhite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faComments, faHouse, faStar } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="container d-flex">
      <div className="d-flex flex-column mb-3 login-welcome">
        <div className="p-2 d-flex justify-content-center">
          <div className="p-2">
            <FontAwesomeIcon icon={faHouse} size="3x" className="text-primary" />
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
                  <FontAwesomeIcon icon={faSearch} size="lg" className="text-primary" />
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
                  <FontAwesomeIcon icon={faCheckCircle} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Verified Listings</p>
                  <p className="description text-muted">
                    All properties are verified for authenticity and accuracy
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faComments} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Direct Communication</p>
                  <p className="description text-muted">
                    Connect directly with property owners and schedule visits
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faStar} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Read reviews and ratings from previous tenants
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
        <form>
          <div class="form-group p-2">
            <label for="email">Email <span className="text-danger">*</span></label>
            <input type="email" className="form-control" name="email" placeholder="Ex. johndoe@xyz.com"/>
          </div>
          <div class="form-group p-2">
            <label for="password">Confirm Password<span className="text-danger">*</span></label>
            <input type="password" className="form-control" name="password" placeholder="Please enter a password"/>
          </div>
          <div class="form-group p-2">
            <input type="checkbox" className="form-check-input" value="1"/>
            <label className="px-2">Remember me</label>
          </div>
          <div class="form-group p-2 d-flex">
            <button type="submit" className="btn btn-primary flex-fill">
              <img
              src={loginwhite}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="GharBhada logo"
            /> Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
