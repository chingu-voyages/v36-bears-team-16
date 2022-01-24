import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import DemoButton from "./DemoButton";

function Login() {
    return (
        <div>
            <SignInButton />
            <SignUpButton />
            <DemoButton />
        </div>
    );
}

export default Login;