import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants";
import "./style.scss";

const PasswordForgetLink = () => (
  <Link to={ROUTE.PASSWORD_FORGET}>
    <p className="link-forget-password">Forgot Password?</p>
  </Link>
);

export default PasswordForgetLink;
