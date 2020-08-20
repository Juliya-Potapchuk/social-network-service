import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { authUserManager } from "../../redux/actions/actionSession";
import "./style.scss";
import { ROUTE } from "../../constants";

const SignOutButton = ({ authUserManager, history }) => {
  const doSignOut = async () => {
    authUserManager();
    history.push(ROUTE.SIGN_IN);
  };

  return (
    <button type="button" onClick={doSignOut} className="button-sign-out">
      Sign Out
    </button>
  );
};

const mapDispatchToProps = {
  authUserManager,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(SignOutButton);
