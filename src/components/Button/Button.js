import React from "react";
import "./style.scss";

const Button = ({ disabled, nameButton, size }) => {
  const width = size === "small" ? "84%" : "100%";

  return (
    <button
      type="submit"
      disabled={disabled}
      className="button-submit"
      style={{ width }}
    >
      {nameButton}
    </button>
  );
};

export default Button;
