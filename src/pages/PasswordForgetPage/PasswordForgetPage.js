import React from "react";
import WrapperWithIcon from "../../components/WrapperWithIcon/WrapperWithIcon";
import PasswordForgetForm from "../../components/Forms/PasswordForgetForm/PasswordForgetForm";
import "./style.scss";

const PasswordForgetPage = () => {
  const sizeWrapper = 429;

  return (
    <WrapperWithIcon size={sizeWrapper}>
      <p className="p-password-forget">Please enter your email.</p>
      <p>
        Next, go to the email you entered, we will send{" "}
        <span className="span-password-forget">
          a password reset instruction
        </span>
        there.
      </p>
      <PasswordForgetForm />
    </WrapperWithIcon>
  );
};

export default PasswordForgetPage;
