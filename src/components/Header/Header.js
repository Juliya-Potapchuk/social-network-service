import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { ROUTE } from "../../constants";
import "./style.scss";

const Header = ({ authUser }) => {
  return (
    <header className="header">
      <NavLink exact to={ROUTE.MAIN_PAGE}>
        <h1 className="h1">PostMania</h1>
      </NavLink>
      {authUser ? <NavBar /> : null}
    </header>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Header);
