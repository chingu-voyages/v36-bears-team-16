import React from "react";
import { Link } from "react-router-dom";
import TokenServices from "../tokenServices";
import Login from "../Login/Login";
import SignUp from "./SignUp/SignUp";
import Demo from "./Demo/Demo";

function LandingPage() {
    return (
        <div>
            {/* <Login /> */}
            <nav>
        <ul id="menu">
          {TokenServices.hasAuthToken() && (
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          )}
          {TokenServices.hasAuthToken() && (
            <li>
              <Link to="/grocery-List">Sign Up</Link>
            </li>
          )}
          {!TokenServices.hasAuthToken() && (
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          )}          
        </ul>
      </nav>
        </div>
    );
}

export default LandingPage;