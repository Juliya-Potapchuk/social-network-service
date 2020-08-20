import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import AlertElement from "../../../components/Alert/Alert";

const alertNode = document.getElementById("alert");
let timerId = null;

export const alertManager = (type, text) => {
  const time = type === "success" ? 3000 : 5000;
  clearTimeout(timerId);
  //   set alert
  render(<AlertElement type={type} text={text} />, alertNode);
  //   delete alert
  timerId = setTimeout(() => {
    unmountComponentAtNode(alertNode);
  }, time);
};
