import React from "react";
import { useHistory } from "react-router-dom";

function LandingPage() {
    let history = useHistory();

    function handleSignIn() {
        history.push("/login");
    }

    function handleSignUp() {
        history.push("/register");
    }

    function handleDemo() {
        history.push("/demo");
    }

    return (
        <section className="main">
            {/* <header role="banner" className="landing-header">
                <h1>Lonche</h1>
            </header> */}
            <div className="button-base-center center-button" onClick={handleSignIn} type="button">
                <button className="center">Sign In</button>
            </div>
            <div className="button-base-center center-button" onClick={handleSignUp} type="button">
                <button className="center">Sign Up</button>
            </div>
            <div className="button-base-center center-button" onClick={handleDemo} type="button">
                <button className="center">Demo</button>
            </div>
        </section>
    );
}

export default LandingPage;