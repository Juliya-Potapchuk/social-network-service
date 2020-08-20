import React from "react";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import WrapperWithIcon from "../../components/WrapperWithIcon/WrapperWithIcon";
import "./style.scss";

const SignUpPage = () => {
  const sizeWrapper = 270;

  return (
    <WrapperWithIcon size={sizeWrapper}>
      <p className="p-instruction">Please enter your details.</p>
      <SignUpForm />
    </WrapperWithIcon>
  );
};

export default SignUpPage;
