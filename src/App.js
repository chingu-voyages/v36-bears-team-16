import React from "react";
import { Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Demo from "./Demo/Demo";
import UserDashboard from "./UserDashboard/UserDashboard";
import BusinessDashboard from "./BusinessDashboard/BusinessDashboard";
import Footer from "./Footer/Footer";
import ApiServices from "./apiServices";
import TokenServices from "./tokenServices";

export default class App extends React.Component {
  state = {};

  search = () => {
    return this.state.items.filter((item) =>
      item.itemName.toLowerCase().includes(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div>
        <main>
          <header className="nav-bg">
            <div className="group">
              <div className="item">
                <Link to="/">
                  <span className="logo">Lonche</span>
                </Link>
              </div>
            </div>
          </header>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/demo">
            <Demo/>
          </Route>
          <Route exact path="/user-dashboard">
            <UserDashboard
              setSearchTerm={this.setSearchTerm}
              items={this.search()}
            />
          </Route>          
          <Route exact path="/business-dashboard">
            <BusinessDashboard/>
          </Route>
          <Route exact path="/login">
            <SignIn setId={this.setId} setToken={this.setToken} />
          </Route>
          <Route exact path="/register">
            <SignUp setId={this.setId} setToken={this.setToken} />
          </Route>
        </main>
        <Footer />
      </div>
    );
  }
}
