import React from "react";
import "./style.scss";
import icon from "../../images/drawing_pin.svg";

const WrapperWithIcon = ({ logoTitle, size, withoutIcon, children }) => {
  const nameApp = logoTitle ? <h2 className="h2">PostMania</h2> : null;

  return (
    <div className="wrapper-style" style={{ maxWidth: size }}>
      {nameApp}
      {withoutIcon ? null : (
        <div className="icon-wrapper">
          <img src={icon} alt="icon" className="icon" />
          <div className="bottom-shadow" />
        </div>
      )}
      <div className="inner-elements">{children}</div>
    </div>
  );
};

export default WrapperWithIcon;
