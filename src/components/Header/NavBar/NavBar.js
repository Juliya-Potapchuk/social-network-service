import React from "react";
import "../style.scss";
import NavigationLink from "./NavigationLink";
import { navBarElements } from "../../../constants";

const NavBar = () => {
  const renderLink = () =>
    navBarElements.map((navObj) => (
      <li key={navObj.id}>
        <NavigationLink
          path={navObj.path}
          pageName={navObj.pageName}
          icon={navObj.icon}
        />
      </li>
    ));

  return (
    <nav className="nav">
      <ul className="nav-link-ul">{renderLink()}</ul>
    </nav>
  );
};

export default NavBar;
