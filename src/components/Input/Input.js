import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Input = ({
  icon,
  name,
  value,
  onChange,
  type,
  placeholder,
  autocomplete,
  maxLength,
  widthValue,
  classValue,
}) => {
  const widthStyle = !widthValue ? null : widthValue;
  const textAlign = icon ? null : "center";
  const forRead = onChange ? null : "readOnly";
  const cursor = forRead ? "auto" : null;
  const classVal = `input-wrapper ${classValue}`;
  
  const addIcon = () => {
    return <FontAwesomeIcon icon={icon} className="small-icon-auth" />;
  };

  return (
    <div className={classVal} style={{ width: widthStyle }}>
      {icon ? addIcon() : null}

      <input
        className="input-auth"
        name={name}
        value={value}
        onChange={onChange}
        readOnly={forRead}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        maxLength={maxLength}
        style={{ textAlign, width: widthStyle, cursor }}
      />
    </div>
  );
};

export default Input;
