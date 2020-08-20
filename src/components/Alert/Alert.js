import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "87vh",
    zIndex: 100,
    bottom: "13px",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertElement({ type, text }) {
  const colorSuccess = "#88d88bd1";
  const colorError = "#f78b83e3";
  const color = type === "success" ? colorSuccess : colorError;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="outlined" severity={type} style={{ background: color }}>
        {text}
      </Alert>
    </div>
  );
}
