import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants";
import "./style.scss";

const SignUpLink = () => (
  <p className="p-sign-up">
    Don&apos;t have an account?{" "}
    <Link to={ROUTE.SIGN_UP} className="link-sign-up">
      Sign Up
    </Link>
  </p>
);

export default SignUpLink;
