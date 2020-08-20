import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import "../style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
      fontSize: "20px",
    },
  },
}));

const NavigationLink = ({ path, pageName, icon }) => {
  const classes = useStyles();
  
  return (
    <NavLink exact to={path} className="nav-link" activeClassName="active-link">
      <IconButton
        aria-label="upload picture"
        component="span"
        className={classes.root}
      >
        <FontAwesomeIcon icon={icon} className="icon-link" />
      </IconButton>
      <span className="pageName">{pageName}</span>
    </NavLink>
  );
};

export default NavigationLink;
