import React from "react";
import { connect } from "react-redux";
import SignOutButton from "../SignOut";
import Input from "../Input/Input";
import "./style.scss";

const PersonalData = ({ authUser }) => {
  const width = "100%";
  const typeValue = "text";

  return (
    <div className="wrapper-personal-data-block">
      <h2 className="h2">PERSONAL DATA</h2>
      <div className="personal-data-sign-out">
        <ul className="personal-data-list">
          <li>
            <span>Name:</span>
            <Input
              type={typeValue}
              value={authUser.userName}
              widthValue={width}
            />
          </li>
          <li>
            <span>Email:</span>
            <Input type={typeValue} value={authUser.email} widthValue={width} />
          </li>
        </ul>
        <SignOutButton />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(PersonalData);
