import React from "react";

import SignInForm from "../../components/Forms/SignInForm/SignInForm";
import SignUpLink from "../../components/SignUp/SignUpLink";
import PasswordForgetLink from "../../components/PasswordForget/PasswordForgetLink";
import WrapperWithIcon from "../../components/WrapperWithIcon/WrapperWithIcon";
import "./style.scss";

const SignInPage = () => {
  const sizeWrapper = 270;

  return (
    <div className="wrapper-sign-in-page">
      <div className="text-sign-in-welcome">
        <p className="text-1"> Welcome to PostMania!</p>
        <p className="text-2">
          Here you can create your blog and share your posts with other users.
          Everything is easy, simple and free.
          <span>Don’t waste time, start now!</span>
        </p>
      </div>
      <WrapperWithIcon size={sizeWrapper}>
        <SignUpLink />
        <SignInForm />
        <PasswordForgetLink />
      </WrapperWithIcon>
    </div>
  );
};

export default SignInPage;
