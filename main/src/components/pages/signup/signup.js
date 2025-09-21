import React from "react";
import './components/signup.css';
import whitesignup from './components/images/signup_whiite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse,
  faHeart, 
  faComments,
  faCheckCircle, 
  faCalendarAlt, 
  faUser} from '@fortawesome/free-regular-svg-icons';
import {faChartPie, faSearch } from "@fortawesome/free-solid-svg-icons";


function Signup() {
  return (
    <div className="container d-flex">
      <div className="d-flex flex-column mb-3 login-welcome">
        <div className="p-2 d-flex justify-content-center">
          <div className="p-2">
            <FontAwesomeIcon icon={faHouse} size="3x" className="text-primary" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <h1>Welcome to GharBhada</h1>
        </div>
        <div className="text-muted text-center">
              <p>Nepal's most trusted rental propery platform</p>
        </div>
        <div className="d-flex mt-5 flex-column">
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faSearch} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Smart Property Search</p>
                  <p className="description text-muted">
                    Find Properties with advanced filters by location, price,
                    and amenities across Nepal
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faHeart} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Save Favorites</p>
                  <p className="description text-muted">
                    Bookmark properties you love and get notified when similar ones
                    become available
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
                    Connect directly wiith property owners without middlemen or extra fees
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
                    Browse verified properties with authentic phots and accurate information
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faCalendarAlt} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Schedule Visits</p>
                  <p className="description text-muted">
                    Book property visits at your convenience with our integrated scheduling system
                  </p>
                </div>
              </div>
              <div className="d-flex flex-fill">
                <div className="p-2 features-svg">
                  <FontAwesomeIcon icon={faChartPie} size="lg" className="text-primary" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <p className="heading">Market Insights</p>
                  <p className="description text-muted">
                    Access rental price trends and market analysis for informed decisions
                  </p>
                </div>
              </div>
        </div>
      </div>

      <div className="col-6 login d-flex flex-column mx-5 my-5">
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faUser} size="4x" className="text-primary" />
        </div>
        <div className="d-flex justify-content-center">
          <h2>Create Account</h2>
        </div>
        <div className="d-flex justify-content-center ">
          <p className="form-description text-muted">
            Join GharBhada to find or list properties
          </p>
        </div>
        <form>
          <div class="form-group p-3">
            <label for="firstname">First Name<span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="firstname" placeholder="Ex. John"/>
          </div>
          <div class="form-group p-3">
            <label for="lastname">Last Name<span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="lastname" placeholder="Ex. Doe"/>
          </div>
          <div class="form-group p-3">
            <label for="email">Email<span className="text-danger">*</span></label>
            <input type="email" className="form-control" name="email" placeholder="Ex. johndoe@xyz.com"/>
          </div>
          <div class="form-group p-3">
            <label for="number">Phone Number<span className="text-danger">*</span></label>
            <div className="d-flex">
              <div className="w-300">
                <select name="country-code" className="form-select">
                  <option vlaue="977">+977</option>
                  <option vlaue="1">+1</option>
                  <option vlaue="2">+40</option>
                  <option vlaue="3">+119</option>
                  <option vlaue="4">+15</option>
                </select>
              </div>
              <div className="flex-fill">
                <input type="number" className="form-control" name="number" placeholder="Ex. 9841234567"/>
              </div>
            </div>
          </div>
          <div class="form-group p-3">
            <label for="gender">Gender<span className="text-danger">*</span></label>
            <select name="gender" className="form-select">
                <option vlaue="">--Please Select--</option>
                <option vlaue="Male">Male</option>
                <option vlaue="Female">Female</option>
                <option vlaue="Other">Other</option>
                <option vlaue="None">Prefer Not Say</option>
              </select>
          </div>
          <div class="form-group p-3">
            <label for="role">I am a<span className="text-danger">*</span></label>
            <select name="role" className="form-select">
                <option vlaue="">--Please Select--</option>
                <option vlaue="renter">Renter - Looking for property</option>
                <option vlaue="owner">Property Owner - Listing property</option>
              </select>
          </div>
          <div class="form-group p-3">
            <label for="password1">Create Password<span className="text-danger">*</span></label>
            <input type="password" className="form-control" name="password1" placeholder="Please enter a password"/>
          </div>
          <div class="form-group p-3">
            <label for="password2">Confirm Password<span className="text-danger">*</span></label>
            <input type="password" className="form-control" name="password2" placeholder="Please enter a password"/>
          </div>
          <div class="form-group p-3 mt-2">
            <input type="checkbox" className="form-check-input" value="1"/>
            <label className="px-2">
              I agree to the Terms of Service and Privacy Policy
              <span className="text-danger">*</span>
            </label>
          </div>
          <div class="form-group p-3 my-2 d-flex">
            <button type="submit" className="btn btn-primary flex-fill">
              <img
              src={whitesignup}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="GharBhada logo"
            /> Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
